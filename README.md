# Dev Site

Minimal Next.js site that **consumes** `@noahwright/design-system`.
- SSR-first pages, tiny footprint, modern browsers only.
- No CSS frameworks or CSS-in-JS. Theming is typed via `theme.ts` ➜ builds `public/theme.css`.

## Commands

```bash
npm i
npm run dev
npm run build && npm start
```

## Storybook

The component showcase lives in the separate design-system repo.  
Update the Storybook link in the site header (`app/layout.tsx`) to your deployed URL.

## Theming

Edit `theme.ts`, then `npm run build:theme`. The script emits `public/theme.css` which is imported in `app/layout.tsx`.
