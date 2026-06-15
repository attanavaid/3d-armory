# Blender → Web GLB Export Guide

Use this checklist when exporting fantasy weapons for the armory viewer.

## Before export

1. **Apply** all transforms (Object → Apply → All Transforms).
2. Set a **consistent origin** (weapon center or grip base) across all assets.
3. Use **Principled BSDF** with PBR maps wired:
   - Base Color → `baseColorTexture`
   - Normal → `normalTexture` (OpenGL normal map)
   - Roughness → `roughnessTexture` (or separate channel in glTF)
   - Metallic → `metallicTexture`
   - Optional AO → occlusion or multiply in base color workflow

## Export settings (glTF 2.0)

1. File → Export → **glTF 2.0 (.glb)**.
2. Format: **GLB** (binary, single file).
3. Include: **Selected Objects** (or entire weapon mesh).
4. Enable **Textures** (embed in GLB).
5. Optional: **Draco mesh compression** (reduces file size; supported by Three.js DRACOLoader if enabled in app later).
6. Keep textures at **2048×2048** max for web (1024 for mobile tier).

## After export

1. Place the file in `public/models/weapons/your-weapon-id.glb`.
2. Add an entry to `data/weapons.ts`:

```ts
{
  id: "your-weapon-id",
  name: "Display Name",
  subtitle: "Short flavor text",
  modelPath: "/models/weapons/your-weapon-id.glb",
  targetSize: 2.2, // tune so framing matches other weapons
  platformLift: 0.6, // optional — lift above turntable if needed
}
```

3. Run `npm run dev` and verify normals/roughness in the browser.

## Optional CLI optimization

```bash
npx @gltf-transform/cli optimize public/models/weapons/your-weapon.glb public/models/weapons/your-weapon-opt.glb
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Flat / no normal detail | Re-export with normal map linked; check Non-Color data on normal image in Blender |
| Too dark / too shiny | Tune Principled roughness/metallic; avoid overriding materials in code |
| Wrong scale in viewer | Adjust `targetSize` in manifest |
| Model clips turntable | Increase `platformLift` in manifest |
| Huge download | Draco + lower texture resolution |
