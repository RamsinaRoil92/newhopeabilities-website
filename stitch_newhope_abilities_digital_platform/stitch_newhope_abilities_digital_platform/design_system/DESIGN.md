---
colors:
  surface: '#faf9fd'
  surface-dim: '#dad9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1e'
  on-surface-variant: '#44474e'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#002046'
  on-primary: '#ffffff'
  primary-container: '#1b365d'
  on-primary-container: '#87a0cd'
  inverse-primary: '#aec7f7'
  secondary: '#466557'
  on-secondary: '#ffffff'
  secondary-container: '#c5e7d6'
  on-secondary-container: '#4a695c'
  tertiary: '#20211e'
  on-tertiary: '#ffffff'
  tertiary-container: '#363633'
  on-tertiary-container: '#a09f9a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f7'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2e476f'
  secondary-fixed: '#c8ead9'
  secondary-fixed-dim: '#adcebe'
  on-secondary-fixed: '#012016'
  on-secondary-fixed-variant: '#2f4d40'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#faf9fd'
  on-background: '#1a1b1e'
  surface-variant: '#e3e2e6'
typography:
  display:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  h2:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  h3:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Lexend
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Lexend
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Lexend
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

The design system is anchored in the principles of dignity, clarity, and human connection. It aims to evoke a sense of professional reliability tempered with a "people-first" warmth. The visual language avoids the clinical coldness often found in healthcare, opting instead for a "Soft Modernism" approach that balances structured reliability with organic, approachable elements.

The emotional response should be one of "supported independence." By utilizing generous whitespace and authentic imagery, the UI feels breathable and easy to navigate, reducing cognitive load for users who may have varying accessibility needs. Every interface element is designed to feel stable and permanent, reinforcing the trust required in the NDIS sector.

## Colors

The palette is intentionally restrained to ensure high visual comfort and cognitive ease. **Deep Navy (#1B365D)** serves as the primary anchor, used for headers, primary actions, and critical text to ensure WCAG AAA contrast ratios. **Sage Green (#7A9A8B)** provides a calming, secondary accent for decorative elements and non-critical supportive icons.

**Warm Linen (#F9F7F2)** acts as the global background color. This soft off-white reduces screen glare compared to pure white, making long-form reading more comfortable for users with visual sensitivities. For functional feedback, colors are darkened significantly from standard variants to maintain strict accessibility compliance against the linen backdrop.

## Typography

The design system utilizes **Lexend**, a typeface specifically engineered to reduce visual stress and improve reading proficiency. Given the NDIS context, legibility is the highest priority. 

The type scale is generous, with a base body size of 16px or 18px to ensure comfortable reading across devices. Tracking is slightly increased for body text to prevent "crowding" of letters, while headlines use a tighter tracking with a bolder weight to establish a clear information hierarchy. All text elements must maintain a contrast ratio of at least 7:1 (AAA) against their respective backgrounds.

## Layout & Spacing

This design system employs a **fixed-width centered grid** for desktop layouts to prevent excessive line lengths that can hinder readability. A 12-column system is used with generous 24px gutters.

The spacing rhythm is strictly based on an 8px (0.5rem) linear scale. Large vertical gaps (Section Gaps) are used to clearly separate different content areas, preventing the UI from feeling cluttered. Content containers should utilize "safe margins" of at least 48px on desktop to provide a focal point that is easy for the eye to track.

## Elevation & Depth

To maintain the "Warm and Trustworthy" aesthetic, depth is conveyed through **Ambient Shadows** rather than harsh borders. Shadows are soft, diffused, and slightly tinted with the Primary Navy color (e.g., hex #1B365D at 8-12% opacity) to make them feel integrated into the environment.

Depth levels are limited to three tiers:
1.  **Level 0 (Flat):** Used for the main background (Linen).
2.  **Level 1 (Raised):** Used for standard cards and interactive surfaces. Features a subtle, wide-spread shadow.
3.  **Level 2 (Overlay):** Used for modals and dropdowns. Features a more pronounced shadow to indicate a temporary state above the main content.

## Shapes

The shape language is defined by a consistent **Rounded (0.5rem/8px)** corner radius. This radius is applied to buttons, input fields, and small cards. For larger containers or imagery, the radius increases to **1rem (16px)** to emphasize the "soft" and approachable nature of the brand.

Avoid sharp 90-degree corners entirely, as they can appear aggressive or overly corporate. Interactive elements like "Pills" for tags may use a fully rounded radius, but the primary UI components should stick to the defined 8px/16px system for a cohesive, professional look.

## Components

### Buttons
Primary buttons use the Deep Navy background with Linen text. Secondary buttons use a thick 2px border of Deep Navy with no fill. All buttons must have a minimum height of 48px to provide a large, accessible tap target. Hover states should involve a subtle darkening of the color, never a complete hue shift.

### Cards
Cards are the primary container for information. They feature a Level 1 shadow, a 16px corner radius, and 24px-32px of internal padding. Imagery within cards must have "soft focus" backgrounds to keep the focus on the community members depicted.

### Input Fields
Inputs use a high-contrast 2px border in Deep Navy when focused. Labels must always be visible (never placeholder-only) to assist users with cognitive impairments. Error states use a high-contrast Dark Red (#B00020) with accompanying icons for redundancy.

### Accessibility Features
A "High Contrast" toggle and "Text Resize" component should be prominently available in the utility navigation. Focus states for keyboard navigation must use a "double-ring" effect (a white inner ring and a Deep Navy outer ring) to ensure visibility on any background.

### Imagery
Use authentic, high-quality photography showing NDIS participants in active, community-integrated settings. Avoid staged "medical" stock photos. Images should have slightly rounded corners (16px) to match the container style.