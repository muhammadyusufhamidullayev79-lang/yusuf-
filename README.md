# Muhammad Yusuf Hamidullayev — Portfolio (React)

This repository was converted from a single static `index.html` into a **Vite + React** app where every page section is its own component and all content flows down **through props**.

## Run it

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # serve the production build
```

## Structure

```
index.html                  Vite entry (meta tags, fonts, JSON-LD, #root)
src/
  main.jsx                  React entry point
  App.jsx                   Owns the data + modal state, passes props to sections
  index.css                 Tailwind + custom styles (grain, reveal, gold, ...)
  data/
    siteData.js             ALL page content — single source of truth
  components/
    ScrollProgress.jsx      Top scroll-progress bar
    Header.jsx              Fixed nav + mobile menu (state: menu open/close)
    Hero.jsx                Above-the-fold section
    HeroVisual.jsx          "Live workspace" mock card (props: systems, links)
    Expertise.jsx           Section 01
    SkillCard.jsx           One expertise card (props: skill)
    Experience.jsx          Section 02
    ExperienceCard.jsx      One job card (props: job)
    Process.jsx             Section 02.5
    Portfolio.jsx           Section 03 + category filters (state: active filter)
    PortfolioCard.jsx       One project card (props: project, onSelect)
    ProjectModal.jsx        Case-study overlay (props: project, meta, onClose)
    Contact.jsx             Contact CTA
    Footer.jsx              Footer strip
    Reveal.jsx              Scroll-reveal wrapper (IntersectionObserver)
    Magnetic.jsx            Magnetic hover effect wrapper
    SectionHeading.jsx      Shared eyebrow + title heading
    Icons.jsx               Inline SVG icon set
```

## How props are used

- `App.jsx` imports everything from `src/data/siteData.js` and passes slices to each section:
  - `<Header profile={profile} navLinks={navLinks} links={links} />`
  - `<Hero profile={profile} stats={heroStats} trust={heroTrust} systems={heroSystems} links={links} />`
  - `<Expertise heading={expertiseHeading} skills={skills} />`
  - `<Experience heading={experienceHeading} jobs={jobs} />`
  - `<Portfolio projects={projects} filters={portfolioFilters} ... onSelect={setActiveProject} />`
- Lists (skills, jobs, projects, filters, stats) are data arrays — components `map()` over them, so adding/removing an item is a data change, not a markup change.
- Interactivity that needs state stays in the component that owns it (mobile menu in `Header`, filter in `Portfolio`, selected project in `App` → rendered as `ProjectModal`).

The original static page is preserved at `original/index.html`.
