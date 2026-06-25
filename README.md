# NewHope Abilities Website

Local-first React, Vite, and Tailwind CSS website for NewHope Abilities, an NDIS service provider based in Melbourne, Australia.

## Stack

- React with Vite
- Tailwind CSS with the Stitch design tokens
- React Router for client-side routing
- React Helmet Async for page metadata and JSON-LD
- lucide-react icons

## Local Development

```bash
npm install
npm run dev
```

The dev server is configured to bind to `127.0.0.1` for local-only development. Vite will print the local URL in the terminal, usually `http://127.0.0.1:5173/`.

## Scripts

```bash
npm run lint
npm run build
npm run generate:images
npm run optimise:images
npm run preview
```

## Routes

- `/`
- `/services`
- `/about-us`
- `/contact`
- `/privacy`
- `/terms`

## SEO And Accessibility

The site includes route-specific titles and descriptions, canonical URLs, Open Graph metadata, Twitter metadata, LocalBusiness JSON-LD, WebSite JSON-LD, `robots.txt`, and `sitemap.xml`.

Accessibility work includes semantic landmarks, a skip link, visible focus rings, labelled form controls, validation messaging, keyboard-friendly mobile navigation, high contrast controls, text resizing controls, and 48px minimum tap targets on primary controls.

## Imagery

The current local images live in `public/images` and use a cohesive warm teal/orange semi-flat illustration style matching the supplied reference image. They were generated with OpenAI from `scripts/generate-style-images.mjs`, then converted to WebP with `scripts/optimise-images.mjs` for better page performance.

To regenerate the full image set, place a local OpenAI API key in `apikey` and run:

```bash
npm run generate:images
```

To regenerate one source image only, pass the PNG filename directly and then run the optimiser:

```bash
node scripts/generate-style-images.mjs hero-cafe-melbourne.png
npm run optimise:images
```

The `apikey` file is ignored by git and must stay local.

## Future Vercel Deployment

The project is Vercel-ready as a Vite SPA. `vercel.json` includes a rewrite to `index.html` so direct visits to client-side routes work after deployment. Confirm the production domain before launch and update canonical URLs if needed.
