# Brand Color Palette — Smoothie & Smoothie Bowl Co.

> **Base color:** `#acc5e4` (Sky Milk)  
> **Audience:** B2B — cafés, restaurants, and similar food service venues  
> **Tone:** Fresh, premium, food-safe

---

## Primary Colors

| Name | Hex | Role |
|------|-----|------|
| Sky Milk | `#acc5e4` | Base · primary brand color |
| Matcha Mist | `#cce6cf` | Fresh · greens & kale bowl range |
| Mango Sorbet | `#f7d6a0` | Warm accent · tropical blends |
| Pitaya Bloom | `#f2a8b8` | Vibrant accent · berry & dragon fruit bowls |
| Coconut Foam | `#e8f3fb` | Light fill · backgrounds & section tints |

## Neutral & Contrast Colors

| Name | Hex | Role |
|------|-----|------|
| Deep Lagoon | `#2c4a66` | Primary text · headings |
| Sea Slate | `#5a7a95` | Secondary text · captions & metadata |
| Oat Cream | `#f5f0e8` | Warm white · card backgrounds |
| Pure | `#ffffff` | Clean white · surfaces & modals |

---

## Full Palette (ordered light → dark)

```
#2c4a66  Deep Lagoon    — darkest, text/headings
#5a7a95  Sea Slate      — secondary text
#acc5e4  Sky Milk       — primary brand (base)
#e8f3fb  Coconut Foam   — light tint/backgrounds
#cce6cf  Matcha Mist    — green accent
#f7d6a0  Mango Sorbet   — warm/tropical accent
#f2a8b8  Pitaya Bloom   — berry/pink accent
#f5f0e8  Oat Cream      — warm neutral surface
#ffffff  Pure           — white surface
```

---

## CSS Custom Properties

Paste into your `:root` or global stylesheet:

```css
:root {
  /* Brand */
  --color-brand-primary:     #acc5e4; /* Sky Milk */
  --color-brand-green:       #cce6cf; /* Matcha Mist */
  --color-brand-tropical:    #f7d6a0; /* Mango Sorbet */
  --color-brand-berry:       #f2a8b8; /* Pitaya Bloom */
  --color-brand-light:       #e8f3fb; /* Coconut Foam */

  /* Text & contrast */
  --color-text-primary:      #2c4a66; /* Deep Lagoon */
  --color-text-secondary:    #5a7a95; /* Sea Slate */

  /* Surfaces */
  --color-surface-warm:      #f5f0e8; /* Oat Cream */
  --color-surface-white:     #ffffff; /* Pure */
}
```

---

## Tailwind Config

Add to `tailwind.config.js` under `theme.extend.colors`:

```js
colors: {
  brand: {
    'sky-milk':      '#acc5e4',
    'matcha-mist':   '#cce6cf',
    'mango-sorbet':  '#f7d6a0',
    'pitaya-bloom':  '#f2a8b8',
    'coconut-foam':  '#e8f3fb',
    'deep-lagoon':   '#2c4a66',
    'sea-slate':     '#5a7a95',
    'oat-cream':     '#f5f0e8',
    'pure':          '#ffffff',
  },
},
```

---

## Usage Guide

### Menus & Packaging
- **Colors:** Sky Milk + Deep Lagoon
- High contrast, clean B2B feel for printed café menus and delivery packaging.

### Bowl Specials & Highlights
- **Colors:** Pitaya Bloom + Mango Sorbet
- Pair for vibrant highlight tags, seasonal specials, and social media posts.

### Backgrounds & Surfaces
- **Colors:** Coconut Foam + Oat Cream
- Soft off-whites that keep the palette fresh without a stark, clinical look.

### Green Range Identity
- **Colors:** Matcha Mist + Deep Lagoon
- Designate the green/veggie bowl line — distinguishable from the main brand but tonally cohesive.

---

## Contrast & Accessibility Notes

| Foreground | Background | Usage |
|------------|------------|-------|
| `#2c4a66` Deep Lagoon | `#acc5e4` Sky Milk | Body text on brand bg ✓ |
| `#2c4a66` Deep Lagoon | `#e8f3fb` Coconut Foam | Headings on light bg ✓ |
| `#2c4a66` Deep Lagoon | `#cce6cf` Matcha Mist | Text on green tint ✓ |
| `#5c1a2e` (dark berry) | `#f2a8b8` Pitaya Bloom | Text on berry accent ✓ |
| `#5c3b07` (dark amber) | `#f7d6a0` Mango Sorbet | Text on warm accent ✓ |
| `#ffffff` Pure | `#2c4a66` Deep Lagoon | Reversed/dark sections ✓ |

> Always test color combinations with a contrast checker (e.g. [coolors.co/contrast-checker](https://coolors.co/contrast-checker)) before finalizing UI components.

---

## Quick Reference Hex List

```
#acc5e4
#cce6cf
#f7d6a0
#f2a8b8
#e8f3fb
#2c4a66
#5a7a95
#f5f0e8
#ffffff
```
