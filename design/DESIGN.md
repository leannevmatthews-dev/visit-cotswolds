---
name: Cotswolds Noir
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3938'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a29'
  surface-container-highest: '#363434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c8c7be'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#929189'
  outline-variant: '#484740'
  surface-tint: '#c9c6c2'
  primary: '#e5e2de'
  on-primary: '#31302e'
  primary-container: '#c9c6c2'
  on-primary-container: '#53524f'
  inverse-primary: '#605e5b'
  secondary: '#cac5c5'
  on-secondary: '#323030'
  secondary-container: '#484646'
  on-secondary-container: '#b8b4b4'
  tertiary: '#f2e1c0'
  on-tertiary: '#392f19'
  tertiary-container: '#d5c5a5'
  on-tertiary-container: '#5d5138'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2de'
  primary-fixed-dim: '#c9c6c2'
  on-primary-fixed: '#1c1c19'
  on-primary-fixed-variant: '#484744'
  secondary-fixed: '#e6e1e1'
  secondary-fixed-dim: '#cac5c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#484646'
  tertiary-fixed: '#f2e1c0'
  tertiary-fixed-dim: '#d5c5a5'
  on-tertiary-fixed: '#231a06'
  on-tertiary-fixed-variant: '#51452d'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#363434'
  limestone: '#C9B99A'
typography:
  display-lg:
    fontFamily: Eb Garamond
    fontSize: 64px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Eb Garamond
    fontSize: 40px
    fontWeight: '300'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Eb Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.15em
  label-micro:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.3em
spacing:
  margin-desktop: 64px
  margin-mobile: 20px
  gutter: 32px
  unit: 8px
  section-padding: 128px
---

---

## Reference & Inspiration

- [Journey Alliance](https://www.journey.com/alliance) — primary reference site for tone, layout, and luxury travel editorial feel.

## Brand & Style
The brand identity is centered on "Unhurried Luxury"—a sophisticated, editorial approach to travel and heritage. It targets a high-end audience seeking tranquility, history, and refined experiences.

The design style is a blend of **Minimalism** and **Glassmorphism**, set against a deep, cinematic backdrop. It utilizes high-contrast imagery with moody color grading, juxtaposed with razor-sharp, traditional typography. The aesthetic mimics a premium physical magazine, emphasizing texture, deep shadows, and an "ethereal" atmospheric quality.

## Colors
The palette is deeply rooted in the "Cotswold Stone" (Limestone) aesthetic, utilizing a monochromatic dark base with warm, metallic-influenced accents.

- **Primary:** A muted silver-grey used for active states and primary icons.
- **Secondary (Background):** A rich, near-black charcoal that provides the "Noir" foundation.
- **Limestone (Tertiary):** The signature brand color, used for high-end call-to-actions, labels, and decorative borders.
- **Glass Effects:** Background blurs use a semi-transparent version of the primary background (`rgba(15, 15, 13, 0.4)`) to maintain depth without breaking the dark immersion.

## Typography
The typographic system relies on the contrast between the graceful, romantic **EB Garamond** for storytelling and the utilitarian, clean **Inter** for navigation and data.

Headlines should frequently utilize *italics* to emphasize the editorial, "curated" feel. Labels always use high letter-spacing and uppercase styling to evoke the feeling of luxury brand marking.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop, with a maximum container width of 1440px. 

- **Horizontal Rhythm:** Generous side margins (64px) create a sense of exclusivity and breathing room.
- **Vertical Rhythm:** Sections are separated by massive whitespace (32px to 128px) to reinforce the "unhurried" brand promise.
- **Bento Grid:** Featured content uses an asymmetric 10-column grid, allowing for large hero features (6 columns) and secondary supporting content (4 columns) to create visual interest.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

1.  **Overlays:** High-contrast images use a bottom-weighted gradient (`image-overlay-gradient`) to ensure typography remains legible while keeping the "dark" atmosphere.
2.  **Translucency:** Navigation bars and search containers use a `backdrop-filter: blur(20px)` and low-opacity borders (`limestone/10`) to float over rich imagery.
3.  **Interactive Depth:** Hover states utilize subtle scaling (`scale-105`) and opacity shifts rather than elevation changes, maintaining a flat but tactile editorial feel.

## Shapes
The shape language is strictly **Sharp (0px)** for most structural elements, including buttons and card containers, to reflect the architectural precision of stone masonry.

Exceptions are made for the "Glass" search bar, which uses a minimal `4px` (Soft) radius to separate it from the background, and standard icons which remain circular.

## Components

- **Buttons:** Primary buttons are rectangular with no radius, utilizing the `limestone` background with `primary-container` text. Hover states should invert or shift to white.
- **Search Bar:** A specialized "Glass" component. It is divided by 1px vertical borders in `limestone/10` and uses micro-labels above input fields.
- **Theme Cards:** Tall aspect ratio (4:5) cards with full-bleed imagery and "Bottom-Left" anchored typography. 
- **Navigation:** A fixed, blurred bar. Links use `label-caps` typography; the active state is indicated by a subtle bottom border.
- **Inputs:** Background-less (transparent) with no focus rings. Use placeholders in `on-surface/30`.
- **Bento Cards:** Integrated image tiles that use `aspect-square` for secondary items and `h-full` for primary features.