# Fantasy Armory

**[Live demo →](https://3d-armory.vercel.app/)** · [Source on GitHub](https://github.com/attanavaid/3d-armory)

Interactive 3D weapon gallery built with Next.js, React Three Fiber, and PBR glTF models. Browse weapons on rotating turntables with left/right navigation, inspect view with stats, and a futuristic HUD.

## Features

- Horizontal carousel with smooth slide transitions (virtualized to active + neighbors)
- Auto-rotating turntable with floating weapon display
- **Inspect view** — side-angle 3D preview with orbit controls and weapon stats
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

## Adding weapons

1. Export from Blender as `.glb` — see [docs/BLENDER_EXPORT.md](docs/BLENDER_EXPORT.md).
2. Copy to `public/models/weapons/your-id.glb`.
3. Add an entry to `data/weapons.ts`.

Optional manifest fields: `platformLift` (turntable height), `invertInspectFacing` (flip inspect view), `inspectTargetSize`.

### GLB optimization

Compress large assets before committing (Meshopt compression; originals can stay in `public/models/weapons/_originals/`, which is gitignored):

```bash
npx @gltf-transform/cli optimize public/models/weapons/model.glb public/models/weapons/model-opt.glb
```

Replace the original filename after verifying the optimized model in dev. Static models are served with long-cache headers from `next.config.ts`.

## Deployment

Production: **[https://3d-armory.vercel.app](https://3d-armory.vercel.app)**

Hosted on [Vercel](https://vercel.com). No environment variables are required.

### Preview vs production

Vercel provides three [environments](https://vercel.com/docs/deployments/environments): **Local** (your machine), **Preview** (branch/PR deploys), and **Production** (the live site).

| Environment | When it deploys | URL |
|-------------|-----------------|-----|
| **Preview** | Push to any branch other than `main`, or open a pull request | Unique URL per branch/commit (posted in the PR) |
| **Production** | Merge/push to `main` | `https://3d-armory.vercel.app` |

**Recommended workflow** for new weapons or UI tweaks:

1. Create a branch: `git checkout -b add-plasma-sword`
2. Add the GLB, update `data/weapons.ts`, and run `npm run build` locally
3. Push and open a pull request — Vercel automatically builds a **preview deployment**
4. Open the preview link from the PR comment and verify turntable + inspect view
5. Merge to `main` — production updates automatically

CLI alternatives:

```bash
npm run build          # verify locally before pushing
npx vercel             # preview deployment (no --prod flag)
npx vercel --prod      # deploy directly to production (usually unnecessary if Git is connected)
```

### One-time Vercel checklist

In the [Vercel project dashboard](https://vercel.com/dashboard) → **Settings → Git**, confirm:

- GitHub repo `attanavaid/3d-armory` is connected
- **Production Branch** is `main`
- **Preview Deployments** are enabled for branches and pull requests

That satisfies the preview-environment step on Vercel’s production checklist. Future weapon and UI changes should go through a branch + PR so you can test on preview before production.

## Tech stack

- Next.js 16 (App Router)
- React Three Fiber + drei
- Framer Motion (UI)
- Tailwind CSS 4
- Three.js (WebGL / PBR)
