# Alwyn Grimm — Personal Blog

A personal blog built with **Next.js 14** (App Router) + **Tailwind CSS**, based on the original HTML design.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/
│   ├── page.tsx          ← Home (the main landing page)
│   ├── lore/page.tsx     ← Your backstory / about
│   ├── links/page.tsx    ← Social links
│   ├── games/page.tsx    ← Game recommendations
│   └── arts/page.tsx     ← Art for chat
├── components/
│   └── PageLayout.tsx    ← Shared layout for inner pages
└── app/globals.css       ← Global styles + animations
```

## Customizing

### Lore
Edit `src/app/lore/page.tsx` — write whatever you want in the sections.

### Links
In `src/app/links/page.tsx`, update the `links` array at the top with your real URLs.

### Games
In `src/app/games/page.tsx`, update the `games` array with your picks.

### Arts
In `src/app/arts/page.tsx`:
1. Drop your images into `/public/arts/`
2. Replace the placeholder `div` with `<Image src="/arts/your-file.png" ... />` from `next/image`

### Adding new pages
1. Create `src/app/yourpage/page.tsx`
2. Import `PageLayout` and write your content
3. Add the link to the nav in `src/app/page.tsx`

## Design Tokens
All colors are in `tailwind.config.ts` under `theme.extend.colors.gold`.  
The background gradient and font are set in `globals.css`.
