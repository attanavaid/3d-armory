# Fantasy Armory

Interactive 3D weapon gallery built with Next.js, React Three Fiber, and PBR glTF models. Browse weapons on rotating turntables with left/right navigation and a futuristic HUD.

## Features

- Horizontal carousel with smooth slide transitions
- Auto-rotating turntable with floating weapon display
- PBR-accurate lighting (environment maps, rim lights, contact shadows)
- Keyboard arrows, swipe, and on-screen navigation
- **Light / dark theme** toggle with persisted preference and matching 3D scene lighting
- Weapon manifest — add a GLB + one entry, no carousel code changes

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding your weapons

1. Export from Blender as `.glb` — see [docs/BLENDER_EXPORT.md](docs/BLENDER_EXPORT.md).
2. Copy to `public/models/weapons/your-id.glb`.
3. Add to `data/weapons.ts`.

Placeholder models are Khronos glTF samples; replace them with your fantasy assets.

## Optional optimization

```bash
npx @gltf-transform/cli optimize public/models/weapons/model.glb public/models/weapons/model-opt.glb
```

## Deploy (Vercel)

```bash
npm run build
```

Push to GitHub and import the repo in Vercel, or run `npx vercel` from this directory.

## Tech stack

- Next.js 16 (App Router)
- React Three Fiber + drei
- @react-spring/three (carousel)
- Framer Motion (UI)
- Tailwind CSS 4
