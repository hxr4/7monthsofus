# Anniversary Site — Permanent Project Constraints

## Scope and content integrity

- This is a private, one-off anniversary website for Hari and Anu.
- The site must feel specific to their relationship, not like a romantic template, wedding page, or AI-generated experience.
- Never invent personal facts, dates, conversations, memories, captions, feelings, quiz answers, the secret, letter text, or closing copy.
- Unfinished content must remain clearly marked as placeholder data.
- Real supplied photographs are the only visual source of truth for Anu. Never generate an AI portrait or visual likeness of her.
- Preserve Hari's supplied writing; do not rewrite it into generic romantic prose.

## Visual and interaction direction

- Use cinematic warmth, dark luxury, restrained futuristic interaction, and dreamy ambience.
- Prefer near-black, charcoal, muted burgundy/wine, warm ivory, and restrained rose/champagne accents. Avoid pink Valentine's aesthetics.
- Glass is a selective material, not a universal card treatment.
- Use editorial serif typography for emotional/display moments and clean sans-serif/monospace utility typography.
- Photography should be treated as memory and remain data-driven; do not create conventional gallery grids.
- Humor must come from relationship-specific detail and understated interaction.
- Every effect must serve story, memory, humor, interaction, emotion, or visual storytelling.

## Technical constraints

- React + TypeScript + Vite.
- Keep dependencies minimal. Use Framer Motion only when it earns its place; do not add Lenis, GSAP, Three.js, or WebGL by default.
- Separate relationship content from presentation in typed data structures.
- Build mobile-first for a modern Android phone, then enhance for larger viewports.
- Preserve native scrolling and prioritize smooth scroll, fast render, responsive images, no layout shift, and efficient animation.
- Use transform/opacity-based motion where possible and respect `prefers-reduced-motion` everywhere.
- Use semantic HTML, keyboard-accessible controls, visible focus states, readable contrast, useful alt text, and touch-friendly hit targets.
- Avoid monolithic components, duplicated logic, magic values, dead code, and unnecessary abstraction.

## Delivery workflow

1. Foundation: global styles, typography, color, responsive layout, ambient background, glass material, motion, accessibility, and typed placeholders.
2. Opening: scroll/navigation architecture and first visual sequence.
3. Story: Beginning, Mess, Distance, January 8, Summit.
4. Memories: Seven Months, photography, Anu, Us.
5. Interactive: quiz, unlock mechanism, secret reveal.
6. Letter: final reading experience; the text itself must remain immediately readable.
7. Polish: mobile, desktop, performance, accessibility, and motion QA.
8. Final QA.

Verify the rendered result at mobile and desktop sizes after each phase. Commit each phase separately with a clear message. Preserve existing work when iterating.
