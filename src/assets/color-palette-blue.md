# Brand Color Palette — Smoothie & Smoothie Bowl Co. (Blue-Focused)

> **Base color:** `#acc5e4` (Sky Milk) — primary background color  
> **Design principle:** Blue is the visual foundation. Every background, surface, section, and layout element lives within the blue family. Accent colors appear only as "toppings" — tags, badges, and product range callouts layered on top of blue backgrounds.  
> **Audience:** B2B — cafés, restaurants, and similar food service venues

---

## ⚠️ Core Rule for AI Agents

> **All backgrounds must use the blue family.**  
> `#acc5e4` is the primary background color for pages and major sections.  
> Accent colors (`#cce6cf`, `#f7d6a0`, `#f2a8b8`) are **never** used as backgrounds — only as tags, badges, and highlights.

---

## Blue Family — Backgrounds & Structure

| Name | Hex | Role | Use for |
|------|-----|------|---------|
| Sky Milk | `#acc5e4` | **PRIMARY background** | Main page bg, hero sections, primary surfaces |
| Glacier | `#d0e4f5` | Mid background | Alternate sections, hover states, dividers |
| Coconut Foam | `#e8f3fb` | Light background | Cards and panels sitting on Sky Milk bg |
| Ice Mist | `#f0f7fd` | Lightest tint | Inner card fills, input backgrounds on dark blue |
| Ocean Wash | `#8aafd4` | Deep background | Active states, selected items, dark variant sections |
| Sea Slate | `#5a7a95` | Deep mid | Secondary text color, icon fill on light blue |
| Deep Lagoon | `#2c4a66` | Darkest blue | Navigation, footer, dark sections, primary text |

### Blue Ramp (light → dark)

```
#f0f7fd  Ice Mist       — lightest tint, inner fills
#e8f3fb  Coconut Foam   — cards & panels
#d0e4f5  Glacier        — alternate section bg
#acc5e4  Sky Milk       — PRIMARY background ★
#8aafd4  Ocean Wash     — active/deep bg
#5a7a95  Sea Slate      — secondary text
#2c4a66  Deep Lagoon    — nav, footer, headings
```

---

## Accent Colors — Tags & Highlights Only

> These colors must **never** be used as backgrounds for sections, cards, or layouts.  
> Use only for: product range badges, status tags, icons, and small callout elements.

| Name | Hex | Use for |
|------|-----|---------|
| Matcha Mist | `#cce6cf` | Green & veggie smoothie range tag |
| Mango Sorbet | `#f7d6a0` | Tropical & seasonal product tag |
| Pitaya Bloom | `#f2a8b8` | Berry & dragon fruit product highlight |

---

## CSS Custom Properties

```css
:root {
  /* ─── Blue family — backgrounds & structure ─── */
  --color-bg-primary:        #acc5e4; /* Sky Milk      — main page background */
  --color-bg-section-alt:    #d0e4f5; /* Glacier       — alternate sections */
  --color-bg-card:           #e8f3fb; /* Coconut Foam  — cards on primary bg */
  --color-bg-card-inner:     #f0f7fd; /* Ice Mist      — inner fills, inputs */
  --color-bg-active:         #8aafd4; /* Ocean Wash    — active/selected states */
  --color-bg-dark:           #2c4a66; /* Deep Lagoon   — nav, footer */

  /* ─── Text on blue backgrounds ─── */
  --color-text-primary:      #2c4a66; /* Deep Lagoon   — headings on light blue */
  --color-text-secondary:    #5a7a95; /* Sea Slate     — body, captions on blue */
  --color-text-on-dark:      #f0f7fd; /* Ice Mist      — text on deep blue bg */

  /* ─── Accent — tags & badges only, never backgrounds ─── */
  --color-accent-green:      #cce6cf; /* Matcha Mist   — green range tag */
  --color-accent-tropical:   #f7d6a0; /* Mango Sorbet  — tropical tag */
  --color-accent-berry:      #f2a8b8; /* Pitaya Bloom  — berry tag */
}
```

---

## Tailwind Config

```js
// tailwind.config.js
colors: {
  brand: {
    /* Blue family — all backgrounds live here */
    'sky-milk':      '#acc5e4', /* PRIMARY background */
    'glacier':       '#d0e4f5', /* alternate section bg */
    'coconut-foam':  '#e8f3fb', /* cards on primary bg */
    'ice-mist':      '#f0f7fd', /* lightest tint */
    'ocean-wash':    '#8aafd4', /* active/deep states */
    'sea-slate':     '#5a7a95', /* secondary text */
    'deep-lagoon':   '#2c4a66', /* nav, footer, headings */

    /* Accents — tags & badges only */
    'matcha-mist':   '#cce6cf',
    'mango-sorbet':  '#f7d6a0',
    'pitaya-bloom':  '#f2a8b8',
  },
},
```

---

## Usage Guide

### Page & Section Backgrounds
- **Primary:** `#acc5e4` Sky Milk — use for all main page backgrounds
- **Alternate sections:** Alternate between `#acc5e4` and `#d0e4f5` (Glacier) for visual rhythm without leaving the blue family
- **Never** use a white or off-white background — keep everything in the blue family

### Cards & Panels
- Cards sit on the primary blue bg using `#e8f3fb` Coconut Foam
- Inner card fills or inputs: `#f0f7fd` Ice Mist
- Border: a slightly darker blue tint such as `#d0e4f5`

### Navigation & Footer
- Background: `#2c4a66` Deep Lagoon
- Text & icons: `#f0f7fd` Ice Mist or `#e8f3fb` Coconut Foam

### Body Text & Headings
- Headings on light blue bg: `#2c4a66` Deep Lagoon
- Body copy on light blue bg: `#5a7a95` Sea Slate
- Text on dark blue bg (`#2c4a66`): `#f0f7fd` Ice Mist

### Product Range Tags & Badges
- Green/veggie range: `#cce6cf` Matcha Mist with text `#1a3d22`
- Tropical range: `#f7d6a0` Mango Sorbet with text `#5c3b07`
- Berry/dragon fruit range: `#f2a8b8` Pitaya Bloom with text `#5c1a2e`

---

## Contrast & Accessibility

| Foreground | Background | Context |
|------------|------------|---------|
| `#2c4a66` Deep Lagoon | `#acc5e4` Sky Milk | Headings on primary bg ✓ |
| `#2c4a66` Deep Lagoon | `#e8f3fb` Coconut Foam | Headings on card bg ✓ |
| `#5a7a95` Sea Slate | `#acc5e4` Sky Milk | Body copy on primary bg ✓ |
| `#5a7a95` Sea Slate | `#e8f3fb` Coconut Foam | Captions on card bg ✓ |
| `#f0f7fd` Ice Mist | `#2c4a66` Deep Lagoon | Text on nav/footer ✓ |
| `#f0f7fd` Ice Mist | `#8aafd4` Ocean Wash | Text on active state ✓ |
| `#1a3d22` | `#cce6cf` Matcha Mist | Tag text on green badge ✓ |
| `#5c3b07` | `#f7d6a0` Mango Sorbet | Tag text on warm badge ✓ |
| `#5c1a2e` | `#f2a8b8` Pitaya Bloom | Tag text on berry badge ✓ |

> Tip: test with [coolors.co/contrast-checker](https://coolors.co/contrast-checker) before finalizing.

---

## Quick Reference Hex List

```
/* Blue family (backgrounds) */
#acc5e4   Sky Milk       ← PRIMARY background
#d0e4f5   Glacier        ← alternate section bg
#e8f3fb   Coconut Foam   ← card bg
#f0f7fd   Ice Mist       ← lightest tint
#8aafd4   Ocean Wash     ← active/deep
#5a7a95   Sea Slate      ← secondary text
#2c4a66   Deep Lagoon    ← nav / footer / headings

/* Accents (tags & badges only) */
#cce6cf   Matcha Mist
#f7d6a0   Mango Sorbet
#f2a8b8   Pitaya Bloom
```
