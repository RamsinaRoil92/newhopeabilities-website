import { readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const imageDir = path.join(root, 'public', 'images')
const selectedFiles = new Set(process.argv.slice(2))
const files = (await readdir(imageDir)).filter((file) => file.endsWith('.png'))
const filesToOptimise = selectedFiles.size
  ? files.filter((file) => selectedFiles.has(file) || selectedFiles.has(file.replace(/\.png$/, '.webp')))
  : files

if (selectedFiles.size && filesToOptimise.length === 0) {
  throw new Error('No matching PNG files were found to optimise.')
}

for (const file of filesToOptimise) {
  const inputPath = path.join(imageDir, file)
  const outputFile = file.replace(/\.png$/, '.webp')
  const outputPath = path.join(imageDir, outputFile)

  await sharp(inputPath)
    .resize({ width: 1536, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toFile(outputPath)

  await rm(inputPath)
  console.log(`Optimised ${file} -> ${outputFile}`)
}

console.log('Image optimisation complete.')
