# shadcn design system

Repo z pełnym zestawem komponentów **shadcn/ui** w React — punkt wyjścia do wgrania
design systemu przez Design Sync do Claude Design.

## Stack

| | |
|---|---|
| Bundler | Vite 8 |
| UI | React 19 + TypeScript 6 |
| Style | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Design system | shadcn CLI 4, styl `radix-nova` (Radix UI + Lucide + Geist) |
| Motyw | zmienne CSS, base color `neutral`, light + dark |

## Struktura

```
src/
├── components/ui/     ← 61 komponentów shadcn (to jest "folder ui")
├── hooks/use-mobile.ts
├── lib/utils.ts       ← re-eksport cn()
├── index.css          ← @theme, tokeny :root i .dark
└── App.tsx            ← galeria komponentów
components.json        ← konfiguracja shadcn CLI
```

## Uruchomienie

```bash
npm install
npm run dev
```

Build produkcyjny i typecheck:

```bash
npm run build
```

## Praca z komponentami

Dodanie / aktualizacja pojedynczego komponentu:

```bash
npx shadcn@latest add button --overwrite
```

Ponowne pobranie wszystkich (po aktualizacji rejestru):

```bash
npx shadcn@latest add --all --overwrite
```

Alias importów to `@/*` → `src/*` (skonfigurowany w `vite.config.ts` i `tsconfig.app.json`):

```tsx
import { Button } from "@/components/ui/button"
```

## Motyw

Tokeny kolorów, promieni i typografii żyją w [src/index.css](src/index.css) —
blok `@theme inline` mapuje zmienne na klasy Tailwinda, a `:root` / `.dark`
trzymają wartości oklch. To jest miejsce do podmiany na własny brand.
