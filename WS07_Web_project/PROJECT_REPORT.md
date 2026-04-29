# Project Report — Charlles Hub

**Author:** Charlles Pereira Costa
**Course project:** Static personal website using HTML &amp; CSS
**Date:** Laurea AMK Webpage Project May 2026

---

## 1. Project idea and purpose

**Charlles Hub** is a small, personal four-page website built with pure HTML5 and CSS3 — no frameworks, no JavaScript, no build step. It is a hand-made corner of the web that introduces who I am, what I do professionally in IT, and the four "threads" I keep returning to outside of work: space, gadgets, travel, and cooking.

The purpose of the project is two-fold:

1. **Demonstrate solid front-end fundamentals** — semantic HTML, modern CSS (custom properties, grid, flexbox, container queries, fluid typography), responsive design, and accessibility.
2. **Serve as a real personal landing page** that I can keep growing over time — something more thoughtful than a generic "about me" template, with a clear voice and a distinctive visual identity.

The site has four pages, all reachable from a consistent navigation bar:

- `index.html` — homepage with hero, four featured interests, and quick paths into the rest of the site
- `about.html` — biography, skills, career goals, with a stylised SVG portrait
- `interests.html` — long-form notes on space, gadgets, travel, and cooking
- `contact.html` — email, LinkedIn, and a static contact form

---

## 2. Tools and technologies used

| Layer            | Technology                                                              |
| ---------------- | ----------------------------------------------------------------------- |
| Markup           | **HTML5** — semantic elements (`header`, `main`, `section`, `article`, `nav`, `footer`, `figure`, `aside`) |
| Styling          | **CSS3** — custom properties, CSS Grid, Flexbox, `clamp()`, media queries, `aspect-ratio`, `backdrop-filter`, animations |
| Typography       | **Google Fonts** — *Fraunces* (display serif), *Outfit* (body sans), *JetBrains Mono* (accents) |
| Imagery          | **Unsplash** royalty-free photos and an inline **SVG illustration** for the portrait |
| Accessibility    | ARIA labels, semantic landmarks, `prefers-reduced-motion`, focus-visible outlines, alt text on all images |
| Responsive UX    | Mobile-first CSS, fluid typography with `clamp()`, **CSS-only hamburger menu** using the checkbox + label technique (no JavaScript) |
| Validation       | **W3C HTML Validator** and **W3C CSS Validator** |
| Editor / runtime | VS Code, Git, any modern browser (tested on Chromium and Firefox) |

The site uses **no JavaScript** — every interaction (hover effects, mobile menu toggle, smooth scrolling, focus states, animated reveals) is implemented in pure CSS.

---

## 3. Design approach

I deliberately avoided the usual "developer portfolio" look (purple gradient on white, centered cards, Inter everywhere) and went for an **editorial / magazine** feel:

- A warm cream paper palette with deep ink text, an amber accent, and a forest-green secondary
- A subtle **grain texture** generated with an inline SVG noise filter for paper feel
- Bold serif headlines (*Fraunces*) with optical-size and SOFT axis variations, mixed with a clean sans-serif (*Outfit*) and monospaced eyebrows (*JetBrains Mono*)
- An **asymmetric card grid** on larger screens (cards span 4-2-2-4 columns) instead of a uniform 4-up grid
- Generous whitespace, large headlines, and small but meaningful micro-interactions on hover
- A pulsing brand dot, animated link underlines, image zoom on card hover, and staggered "reveal" entrance animations on each page

---

## 4. Responsive design

The layout is mobile-first and was designed to feel right at three breakpoints:

- **Phone (≤ 600 px):** single column, stacked navigation behind a hamburger toggle, larger tap targets, fluid headline sizes
- **Tablet (≥ 720 px):** asymmetric two-column card grid, side-by-side contact cards, denser meta information
- **Desktop (≥ 880 px):** full editorial article layout with sticky sidebar on the About page, three-column footer

`clamp()` is used throughout for headline sizes and spacing so the design scales smoothly between breakpoints, not just at them.

---

## 5. Validation

Both the HTML and CSS were checked with the official W3C tools:

- **HTML:** [validator.w3.org/nu](https://validator.w3.org/nu/) — all four pages pass with no errors
- **CSS:** [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/) — `styles.css` passes as valid CSS3

Issues encountered and fixed during validation:

- Initially missed a `lang` attribute on `<html>` and a `meta charset` declaration → added `lang="en"` and `<meta charset="UTF-8">` on every page.
- Used `&` directly in URLs to Google Fonts → replaced with the proper entity `&amp;` so the HTML validates strictly.
- Missing `alt` attributes on a couple of decorative images → added meaningful alt text or `aria-hidden="true"` for purely decorative SVGs.

---

## 6. Challenges and how I solved them

1. **Avoiding "AI-generic" design.** My first draft was the standard purple gradient + Inter + centered cards. I scrapped it and committed to an editorial aesthetic with serif display type, a warm palette, and asymmetric layouts. Picking *Fraunces* with its variable axes was a key moment — it gave the headlines real personality.

2. **Building a mobile menu without JavaScript.** The site is JS-free, so the hamburger menu uses the classic `<input type="checkbox">` + `<label>` pattern: clicking the label toggles the checkbox's `:checked` state, which CSS uses to expand the navigation. It's accessible (the label has an `aria-label`) and works on every modern browser.

3. **Keeping HTML valid while still rich.** I wanted custom typography and animations, but every feature had to leave the HTML strictly valid. That meant entity-encoding ampersands in font URLs, choosing semantic elements (`<article>`, `<aside>`, `<dl>`, `<figure>`) over generic `<div>`s, and adding correct ARIA only where it added meaning.

4. **Making the cards feel editorial, not cookie-cutter.** The CSS Grid `nth-child` rules give the homepage a 4-2-2-4 column rhythm on tablet+ screens, while still collapsing cleanly to a single column on phones. That tiny detail moved the page away from "generic dashboard" toward "magazine".

5. **Performance.** Even without a build step, I kept the page lean — no JavaScript, three font families requested in a single `link` tag, and CSS-only effects (no heavy libraries). The grain texture is inlined as a data URI rather than a separate request.

---

## 7. Additional features and improvements implemented

Beyond the four required tasks, I added:

- **A custom inline-SVG portrait** on the About page so the site does not depend on a personal photo and remains lightweight.
- **A pull-quote** styled in the *Fraunces* italic axis to break up long-form text.
- **A skill grid** with numbered items and short descriptions instead of a plain list.
- **In-page anchors** (`#space`, `#gadgets`, `#travel`, `#cooking`) so each homepage card jumps directly to the matching section on the Interests page.
- **Sticky, blurred top navigation** that uses `backdrop-filter` for a modern glass effect while remaining readable.
- **Animated entrance reveals** with staggered delays, gated behind `prefers-reduced-motion: no-preference` so users with motion sensitivity get a static version.
- **A static contact form** that is fully styled and accessible — ready to be wired to a backend (Formspree, a custom API, etc.) later.
- **A footer with a three-column layout** including brand mark, quick navigation, and meta information.
- **Selection styling and `:focus-visible` outlines** in the brand amber, for a small but cohesive touch.

---

## 8. What I would do next

If I had another week, I would:

- Wire the contact form to a serverless function or Formspree endpoint.
- Add a small `journal` page with one or two short posts to make the site feel actively maintained.
- Run the site through Lighthouse and tune the few accessibility and performance items it surfaces.
- Add a light/dark theme toggle using CSS custom properties only (the design tokens are already structured for it).

---

## 9. File layout

```
charlles-hub/
├── index.html        # Homepage
├── about.html        # Biography
├── interests.html    # Long-form notes on the four threads
├── contact.html      # Email, LinkedIn, static form
├── styles.css        # All shared styles
└── PROJECT_REPORT.md # This document
```

---

*End of report.*
