# SYSTEM_ARCHITECTURE.md — Fariha Hassan Portfolio
> Angular 17 standalone single-page portfolio. Read this before touching anything.

> [!IMPORTANT]
> **Developer Work Rules:**
> 1. **No Git Actions:** DO NOT run any Git commands (such as `git add`, `git commit`, `git push`, `git pull`). Staging, committing, and pushing/pulling must be managed manually by the user. Do not push, commit, or pull on GitHub.
> 2. **Do Not Build:** DO NOT run build commands (`npm run build` or `ng build`) during development unless explicitly requested or needed to check production bundle outputs.
> 3. **Run Lint After Every Change:** ALWAYS run the linter (`npm run lint` or `ng lint`) after making any code or styling changes to ensure zero warnings or errors are introduced.
> 4. **No Unnecessary Testing:** DO NOT test the project (e.g. running browser tests or launch tests) unless it is explicitly needed to debug a specific issue.

---

## Quick Start

```bash
npm install
npm start          # → http://localhost:4200
npm run build      # production build → dist/portfolio/
```

> **Assets:** CV document is located in `src/assets/docs/Fariha_Hassan_CV.pdf` (referenced for download in navbar and mobile menu).

---

## Tech Stack

| Layer        | Choice                                         |
|--------------|------------------------------------------------|
| Framework    | Angular 17 (standalone components, no NgModule)|
| Styling      | SCSS with custom design system                 |
| State        | Angular Signals (`signal()`)                   |
| Animations   | Pure CSS keyframes + IntersectionObserver      |
| i18n         | Custom `TranslateService` (TypeScript constants)|
| Builder      | `@angular-devkit/build-angular:application`    |
| Icons        | FontAwesome 6 (CDN in `index.html`)            |
| Fonts        | Inter + Fira Code (Google Fonts CDN)           |

---

## Project Structure

```
i:\Work\my portfolio\fariha-portfolio\
├── angular.json                  ← build config (application builder, src/assets)
├── tsconfig.json / tsconfig.app.json
├── package.json
├── SYSTEM_ARCHITECTURE.md        ← this file
│
└── src/
    ├── index.html                ← SEO meta, FontAwesome CDN, Google Fonts
    ├── main.ts                   ← bootstrapApplication(AppComponent, appConfig)
    ├── styles.scss               ← global reset, base typography, scrollbar
    │
    ├── assets/
    │   ├── docs/
    │   │   └── Fariha_Hassan_CV.pdf
    │   └── images/
    │       └── portfolio_logo.png
    │
    └── app/
        ├── app.config.ts         ← provideRouter, provideAnimations, provideHttpClient
        ├── app.component.ts      ← root router-outlet container
        ├── app.component.html    ← displays <router-outlet>
        │
        ├── services/
        │   ├── translate.service.ts  ← t(key), tArray(key), section(key) — dot-notation
        │   ├── theme.service.ts      ← signal-based dark/light, localStorage persist
        │   ├── scroll.service.ts     ← activeSection signal, isScrolled signal, scrollTo()
        │   └── portfolio.service.ts  ← ALL profile data (skills, experience, projects, etc.)
        │
        ├── utils/
        │   ├── viewport.util.ts      ← initRevealObserver() — IntersectionObserver for .reveal
        │   └── animations.util.ts    ← clamp(), debounce()
        │
        ├── models/
        │   └── portfolio.models.ts   ← interfaces: SkillCategory, Experience, Project,
        │                                Publication, Education, Leadership, ContactForm
        │
        ├── shared-components/        ← global shared components
        │   ├── navbar/               ← fixed top; glass on scroll; hamburger; active-link
        │   ├── footer/               ← logo (<Fariha.db/>), copyright, built-with
        │   └── theme-toggle/         ← dark/light theme switch button
        │
        └── pages/                    ← route page components
            ├── main-portfolio/       ← shell assembling all section components on a single scroll page
            │
            ├── hero/                 ← full-screen; tagline with sub-bullets; mountained circle with floating tech nodes (Oracle DB, Linux, Jira, Python)
            ├── about/                ← bio paragraphs + 4 stat cards (1.5+ years experience, 2+ databases, 3+ projects, 8+ tools)
            ├── skills/               ← primary categories (Databases, Oracle tools, Linux, concepts, tools) + "Analytical & Business Skills" subsection grid
            ├── experience/           ← vertical timeline (1 entry: Express Systems Limited, Junior Engineer)
            ├── projects/             ← 12 project cards (Enterprise implementations, DBA operations, Flutter/Angular applications)
            │   └── project-details/  ← details page nested inside projects
            ├── publications/         ← 2 research cards (construction safety ICCIT, precision agriculture crop recommendation thesis)
            │   └── publication-details/ ← details page nested inside publications
            ├── education/            ← 3 edu cards (AUST, HSC, SSC) + leadership sidebar (AUST CSE Society, Innovation & Design Club)
            └── contact/              ← info panel + contact form (simulated submit)
```

---

## Design System

### Theme Modes (`styles.scss`)

The application supports responsive light and dark themes using a CSS token-mapping system:

#### 1. Dark Mode (`[data-theme="dark"]` / Default)
- **Palette**: Dark blue and white theme.
- **Backgrounds**: Base `#050b18`, surface `#0a1225`, card `#0e1a35`.
- **Text & Accents**: White headers, blue secondary text, cyan/light-blue highlights.
- **Hero**: Deep blue gradient (`linear-gradient(135deg, #0c1f4a 0%, #050b18 50%, #071530 100%)`).

#### 2. Light Mode (`[data-theme="light"]`)
- **Palette**: Clean white, light pink, and red theme.
- **Backgrounds**: Base `#ffffff`, surface `#fff0f3` (soft light pink), card `#ffffff`.
- **Text & Accents**: Dark maroon headers (`#1f000b`), red secondary text (`#dc2626`), pink highlights (`#fb7185`).
- **Hero**: Soft light pink gradient (`linear-gradient(135deg, #ffffff 0%, #fff0f3 60%, #ffe4e6 100%)`) with high-contrast red/maroon text.

### Key CSS Components
- **`glass-card`** — backdrop-filter glassmorphism card styling with hover lift.
- **`btn-primary`** — primary action button using the dominant theme gradient (cyan-to-blue in dark mode, pink-to-red in light mode).
- **`btn-outline` / `btn-ghost`** — secondary and tertiary buttons inheriting border and hover styling.
- **`tech-badge`** — micro pill tags for highlighting key technologies.

### Scroll Reveal
Any element with class `reveal` is invisible by default. `initRevealObserver()` (called in `AppComponent.ngOnInit`) adds `revealed` via IntersectionObserver when the element enters the viewport. Add `delay-1` through `delay-10` for staggered reveals (80ms steps).

```html
<div class="reveal delay-2">Animates in on scroll</div>
```

---

## Data Flow

```
portfolio.service.ts  ──► Feature Component (injected)
                                │
                                ▼
en.ts (i18n)  ──► TranslateService.t(key)  ──► Template {{ t.t('hero.name') }}
                                │
                                ▼
ThemeService (signal) ──────────────────────────► data-theme attribute, toggle state
ScrollService (signal) ─────────────────────────► navbar active-link, scroll detection
```

---

## Adding / Editing Content

### Change profile data (skills, projects, experience, etc.)
→ Edit `src/app/services/portfolio.service.ts`

### Change UI text / labels
→ Edit `src/app/i18n/en.ts`

### Add a new language (e.g. Bengali)
1. Create `src/app/i18n/bn.ts` with the same structure as `en.ts`.
2. In `TranslateService`, import `BN` and add to the translations dictionary.
3. Add a language toggle trigger calling `translateService.setLanguage('bn')`.

### Add a new section
1. Generate component: `ng generate component pages/my-section --standalone --style=scss`
2. Add data method to `portfolio.service.ts`.
3. Import and add `<app-my-section id="my-section">` in `app.component.html`.
4. Add `'my-section'` to `ScrollService.sections` array.
5. Add nav link in `NavbarComponent.navLinks`.
6. Add i18n keys in `en.ts`.

---

## Section Order (DOM + Nav)

```
hero → about → skills → experience → projects → publications → education → contact
```

---

## Known Limitations / TODOs

- **Contact Form** — Form submission is simulated with a 1.5s timeout. It can be wired to a real API (e.g. EmailJS, Formspree, or a backend endpoint) in `ContactComponent.onSubmit()`.
- **CV Download** — The download buttons reference the file at `src/assets/docs/Fariha_Hassan_CV.pdf`.
- **Projects `hexToRgb()`** — Used in the projects page template for dynamic `rgba()` backgrounds per project card. Lives in `projects.component.ts`.
- **No SPA Routing** — Built as a single-page application with anchor-scroll navigation. Details views for projects/publications are handled within separate lazy-loaded components or simple overlays.
