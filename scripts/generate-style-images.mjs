import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const keyPath = path.join(root, 'apikey')
const outputDir = path.join(root, 'public', 'images')

const styleGuide = [
  'semi-realistic hand-drawn editorial illustration',
  'realistic adult proportions, natural faces, expressive but not cartoonish',
  'soft digital painting with subtle linework and gentle paper grain',
  'more dimensional lighting and shadows, not flat vector art',
  'teal and aqua interior palette with sage green and warm peach accents',
  'large sunlit windows and soft natural shadows',
  'respectful everyday NDIS support scene',
  'friendly diverse Australian adults',
  'calm, optimistic, modern, accessible, non-clinical',
  'avoid exaggerated features, avoid childish cartoon style, avoid plastic stock art',
  'no hospital, no sterile medical room, no text, no logos, no watermark',
].join(', ')

const images = [
  {
    file: 'hero-cafe-melbourne.png',
    prompt:
      'Wide website hero composition inside a welcoming Melbourne cafe. Put the disability support worker and adult participant sharing coffee on the right half of the image, with calm teal window light and uncluttered negative space on the left half for website text. One adult uses a wheelchair. Warm, relaxed, dignified, community-centred mood.',
  },
  {
    file: 'service-community-access.png',
    prompt:
      'A Melbourne neighbourhood market scene with a support worker and adult participant choosing fresh produce together. Include accessible paths, realistic body language, friendly people in the background, and a sense of confidence and belonging.',
  },
  {
    file: 'service-self-care.png',
    prompt:
      'A respectful self-care support scene in a bright Melbourne apartment, with a support worker helping an adult participant organise a morning routine at a dresser table. Natural adult faces and body language. Private, calm, empowering, non-clinical.',
  },
  {
    file: 'service-cleaning.png',
    prompt:
      'A light household cleaning support scene in a warm modern living room, with a participant and support worker tidying together. Natural posture, realistic hands, clean comfortable home, plants, sunlight, and practical everyday teamwork.',
  },
  {
    file: 'service-household-tasks.png',
    prompt:
      'A household tasks scene in a bright teal-accented kitchen, with a support worker and participant preparing a simple healthy meal together. Include realistic hands preparing vegetables, groceries on the bench, warm light, and a collaborative feeling.',
  },
  {
    file: 'melbourne-community.png',
    prompt:
      'A Melbourne community scene near Federation Square and Flinders Street Station, with wide accessible paths, trees, warm sunlight, and a support worker beside an adult participant. Make the city recognisable through architecture, colour, and shape, without readable text.',
  },
  {
    file: 'team-park-melbourne.png',
    prompt:
      'A diverse NewHope Abilities support team standing together in a sunny Melbourne park, friendly relaxed professional clothing, inclusive group with different ages and backgrounds, natural adult proportions, warm and trustworthy.',
  },
  {
    file: 'melbourne-map.png',
    prompt:
      'A stylised Greater Melbourne service area map panel in the same warm teal illustration style, with soft abstract suburb shapes, accessible route lines, a simple location pin, and a clean uncluttered layout. Do not include readable labels.',
  },
]

const selectedFiles = new Set(process.argv.slice(2))
const imagesToGenerate = selectedFiles.size
  ? images.filter((image) => selectedFiles.has(image.file))
  : images

if (selectedFiles.size && imagesToGenerate.length !== selectedFiles.size) {
  const knownFiles = images.map((image) => image.file).join(', ')
  throw new Error(`Unknown image filename. Available files: ${knownFiles}`)
}

function parseApiKey(rawText) {
  const trimmed = rawText.trim()

  if (!trimmed) {
    throw new Error('The apikey file is empty.')
  }

  try {
    const parsed = JSON.parse(trimmed)
    if (parsed.apiKey) return parsed.apiKey.trim()
    if (parsed.OPENAI_API_KEY) return parsed.OPENAI_API_KEY.trim()
  } catch {
    // Plain-text key files are expected, so JSON parsing is optional.
  }

  const envLine = trimmed
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.startsWith('OPENAI_API_KEY=') || line.startsWith('apiKey='))

  if (envLine) {
    return envLine.split('=').slice(1).join('=').replace(/^['"]|['"]$/g, '').trim()
  }

  return trimmed.replace(/^['"]|['"]$/g, '')
}

async function generateImage(apiKey, image) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: `${image.prompt}\n\nStyle: ${styleGuide}.`,
      size: '1536x1024',
      n: 1,
    }),
  })

  const bodyText = await response.text()

  if (!response.ok) {
    let message = bodyText
    try {
      const parsed = JSON.parse(bodyText)
      message = parsed.error?.message || message
    } catch {
      // Keep the raw body text if the API response is not JSON.
    }

    throw new Error(`${image.file}: ${response.status} ${message}`)
  }

  const payload = JSON.parse(bodyText)
  const firstImage = payload.data?.[0]

  if (firstImage?.b64_json) {
    return Buffer.from(firstImage.b64_json, 'base64')
  }

  if (firstImage?.url) {
    const imageResponse = await fetch(firstImage.url)
    if (!imageResponse.ok) {
      throw new Error(`${image.file}: failed to download generated image URL`)
    }

    return Buffer.from(await imageResponse.arrayBuffer())
  }

  throw new Error(`${image.file}: image data was not returned by the API`)
}

async function generateImageWithRetry(apiKey, image, attempt = 1) {
  try {
    return await generateImage(apiKey, image)
  } catch (error) {
    if (attempt >= 3) {
      throw error
    }

    console.warn(`Retrying ${image.file} after attempt ${attempt} failed.`)
    return generateImageWithRetry(apiKey, image, attempt + 1)
  }
}

await mkdir(outputDir, { recursive: true })
const apiKey = parseApiKey(await readFile(keyPath, 'utf8'))

for (const image of imagesToGenerate) {
  console.log(`Generating ${image.file}`)
  const imageBuffer = await generateImageWithRetry(apiKey, image)
  await writeFile(path.join(outputDir, image.file), imageBuffer)
  console.log(`Saved ${image.file}`)
}

console.log('Image generation complete.')
