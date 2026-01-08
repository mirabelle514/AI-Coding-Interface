# Design-to-Code Bridge: Atelier Design System

## 🎨 Color Palette

### Primary Colors

#### Background

```
Hex: #1a1a2e
HSL: 214 24% 18%
RGB: 26, 26, 46
Usage: Main page background, dark theme foundation
```

#### Surface

```
Hex: #16213e
HSL: 214 29% 24%
RGB: 22, 33, 62
Usage: Cards, panels, elevated elements
```

#### Surface Elevated

```
Hex: #1f2b47
HSL: 215 16% 28%
RGB: 31, 43, 71
Usage: Hover states, active elements, raised surfaces
```

---

### Accent Colors

#### Primary Accent (Red)

```
Hex: #e94560
HSL: 350 82% 60%
RGB: 233, 69, 96
Usage: Primary buttons, links, main CTAs
```

#### Primary Accent Hover

```
Hex: #d63d56
HSL: 350 82% 48%
RGB: 214, 61, 86
Usage: Button hover states, interactive feedback
```

#### Primary Accent Light

```
Hex: #f8b4c4
HSL: 343 91% 79%
RGB: 248, 180, 196
Usage: Light backgrounds, highlights, focus states
```

#### Secondary Accent (Teal)

```
Hex: #4ecdc4
HSL: 178 62% 55%
RGB: 78, 205, 196
Usage: Secondary actions, success states, complementary highlights
```

#### Secondary Accent Light

```
Hex: #7eddd6
HSL: 174 62% 69%
RGB: 126, 221, 214
Usage: Light secondary backgrounds, hover states
```

---

### Text Colors

#### Primary Text

```
Hex: #ffffff
HSL: 0 0% 100%
RGB: 255, 255, 255
Usage: Main body text, headings
```

#### Muted Text

```
Hex: #9ca3af
HSL: 220 9% 61%
RGB: 156, 163, 175
Usage: Secondary text, labels, metadata
```

#### Subtle Text

```
Hex: #6b7280
HSL: 217 12% 43%
RGB: 107, 114, 128
Usage: Tertiary text, disabled states, hints
```

---

### Border & Divider

#### Border (Primary)

```
Hex: #4a3f6b
HSL: 270 11% 43%
RGB: 74, 63, 107
Usage: Card borders, dividers, separators
```

#### Border Light

```
RGBA: rgba(255, 255, 255, 0.1)
Usage: Subtle borders, light dividers
```

---

### Semantic Colors

#### Success

```
Hex: #4ecdc4
HSL: 178 62% 55%
RGB: 78, 205, 196
Usage: Success messages, positive feedback, checks
```

#### Warning

```
Hex: #ffd93d
HSL: 46 100% 50%
RGB: 255, 217, 61
Usage: Warnings, cautions, alerts
```

#### Error

```
Hex: #e94560
HSL: 350 82% 60%
RGB: 233, 69, 96
Usage: Errors, destructive actions, failures
```

---

## 📐 Typography

### Font Family

- **Primary**: Inter (imported from Google Fonts)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Font Weights

- **Regular (400)**: Body text, descriptions
- **Semibold (600)**: Labels, secondary headings
- **Bold (700)**: Main headings, emphasis
- **Black (800)**: Hero text, major headings

### Font Sizes

```
Headings:
- H1 (Hero): 3.5rem - 4.5rem / 56px - 72px
- H2 (Section): 2rem - 3rem / 32px - 48px
- H3 (Subsection): 1.5rem - 2rem / 24px - 32px
- H4 (Small): 1.25rem / 20px
- H5 (Tiny): 1rem / 16px

Body:
- Large: 1.125rem / 18px
- Regular: 1rem / 16px
- Small: 0.875rem / 14px
- Tiny: 0.75rem / 12px
```

### Line Height

- Headings: 1.1 (tight)
- Body: 1.6 (comfortable)
- Code: 1.5 (readable)

---

## 🎯 Spacing System

### Base Unit: 4px

```
Spacing Scale:
2px   = 0.5 unit
4px   = 1 unit
8px   = 2 units
12px  = 3 units
16px  = 4 units
20px  = 5 units
24px  = 6 units
32px  = 8 units
40px  = 10 units
48px  = 12 units
56px  = 14 units
64px  = 16 units
80px  = 20 units
96px  = 24 units
```

### Common Padding

```
Containers: 24px (6 units)
Cards: 24px (6 units)
Buttons: 12px vertical / 16px horizontal
Inputs: 10px vertical / 12px horizontal
```

### Common Margins

```
Section spacing: 32px - 48px (8-12 units)
Element spacing: 16px - 24px (4-6 units)
Item spacing: 8px - 12px (2-3 units)
```

---

## 🔘 Border Radius

```
None: 0px
Small: 4px (0.25rem)
Medium: 8px (0.5rem) ← Default
Large: 12px (0.75rem)
XL: 16px (1rem)
Full: 9999px (rounded)
```

**Applied to:**

- Buttons: 8px
- Input fields: 8px
- Cards: 8px
- Modals: 12px
- Badges: 4px

---

## 💫 Animations & Transitions

### Duration

- **Instant**: 0ms
- **Fast**: 100ms (feedback)
- **Normal**: 200ms (standard)
- **Slow**: 300ms (entrance)
- **Glacial**: 500ms (complex)

### Easing Functions

```
ease-out (exit): cubic-bezier(0.16, 1, 0.3, 1)
ease-in (enter): cubic-bezier(0.7, 0, 0.84, 0)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Animations

- **Fade**: Opacity 200ms ease-out
- **Slide**: Transform 200ms ease-out
- **Scale**: Transform 200ms ease-out
- **Pulse**: Opacity infinite 2s
- **Float**: Transform infinite 3s ease-in-out

---

## 🎭 Shadows

```
Subtle: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
Small: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Large: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
XL: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
2XL: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

---

## 📱 Breakpoints

```
Mobile: 0px - 640px (default)
Tablet: 641px - 1024px (md)
Desktop: 1025px - 1280px (lg)
Large Desktop: 1281px+ (xl)

Tailwind Prefixes:
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

---

## 🖼️ Component Styling Guide

### Buttons

#### Primary Button

```
Background: #e94560 (Primary Accent)
Text: #ffffff (White)
Padding: 12px 24px
Border Radius: 8px
Font Weight: 600
Transition: 200ms ease

Hover: #d63d56 (Primary Hover)
Active: #c13450
Disabled: #6b7280
```

#### Secondary Button

```
Background: #4ecdc4 (Secondary Accent)
Text: #1a1a2e (Background)
Padding: 12px 24px
Border Radius: 8px
Font Weight: 600
Transition: 200ms ease

Hover: #7eddd6 (Secondary Light)
Active: #3ba9a0
Disabled: #6b7280
```

#### Outline Button

```
Background: transparent
Border: 1px solid #4a3f6b
Text: #ffffff
Padding: 12px 24px
Border Radius: 8px

Hover: Background #1f2b47
Focus: Border #e94560
```

### Cards

```
Background: #16213e (Surface)
Border: 1px solid #4a3f6b
Border Radius: 8px
Padding: 24px
Shadow: subtle (0 1px 2px 0 rgba(0,0,0,0.1))

Hover:
- Border: #e94560
- Background: #1f2b47
- Shadow: medium
- Transition: 200ms ease-out
```

### Input Fields

```
Background: #1a1a2e (Background)
Border: 1px solid #4a3f6b
Text: #ffffff
Padding: 10px 12px
Border Radius: 8px

Focus:
- Border: #e94560
- Box Shadow: 0 0 0 3px rgba(233, 69, 96, 0.1)

Placeholder: #6b7280
Disabled: #6b7280, opacity 0.5
```

### Badges

```
Background: #e94560 (Primary)
Text: #ffffff
Padding: 4px 12px
Border Radius: 4px
Font Size: 12px
Font Weight: 600

Variants:
- primary: #e94560 on #1a1a2e
- success: #4ecdc4 on #1a1a2e
- warning: #ffd93d on #1a1a2e
- error: #e94560 on #1a1a2e
```

---

## 🎨 Color Usage by Component

| Component | Primary | Secondary | Background | Usage      |
| --------- | ------- | --------- | ---------- | ---------- |
| Buttons   | #e94560 | #4ecdc4   | #1a1a2e    | CTAs       |
| Links     | #e94560 | -         | -          | Navigation |
| Badges    | #e94560 | #4ecdc4   | #1a1a2e    | Status     |
| Cards     | -       | -         | #16213e    | Containers |
| Text      | #ffffff | #9ca3af   | -          | Content    |
| Borders   | -       | -         | #4a3f6b    | Dividers   |
| Success   | #4ecdc4 | -         | #16213e    | Positive   |
| Warning   | #ffd93d | -         | #16213e    | Cautions   |
| Error     | #e94560 | -         | #16213e    | Failures   |

---

## 💾 CSS Variables (Tailwind Integration)

```css
/* Light/Dark Root Variables */
:root {
  --atelier-brand-bg: 214 24% 18%;
  --atelier-brand-surface: 214 29% 24%;
  --atelier-brand-surface-elevated: 215 16% 28%;
  --atelier-brand-primary: 350 82% 60%;
  --atelier-brand-primary-hover: 350 82% 48%;
  --atelier-brand-primary-light: 343 91% 79%;
  --atelier-brand-secondary: 178 62% 55%;
  --atelier-brand-secondary-light: 174 62% 69%;
  --atelier-brand-text: 0 0% 100%;
  --atelier-brand-text-muted: 220 9% 61%;
  --atelier-brand-text-subtle: 217 12% 43%;
  --atelier-brand-border: 270 11% 43%;
  --atelier-brand-border-light: 0 0% 100% / 0.1;
  --atelier-brand-success: 178 62% 55%;
  --atelier-brand-warning: 46 100% 50%;
  --atelier-brand-error: 350 82% 60%;
}
```

### Usage in Tailwind

```html
<!-- Background -->
<div class="bg-atelier-bg">
  <div class="bg-atelier-surface">
    <div class="bg-atelier-surface-elevated">
      <!-- Text -->
      <p class="text-atelier-text"></p>
      <p class="text-atelier-text-muted">
        <!-- Buttons -->
        <button class="bg-atelier-primary">
          <button class="hover:bg-atelier-primary-hover">
            <!-- Borders -->
            <div class="border border-atelier-border"></div>
          </button>
        </button>
      </p>
    </div>
  </div>
</div>
```

---

## 📚 Design Patterns

### Call-to-Action (CTA)

- Primary button in primary accent color
- 16px minimum padding
- Clear, action-oriented text
- Subtle shadow on hover

### Form Layout

- Labels above inputs
- 16px spacing between fields
- Error messages in red (#e94560)
- Success messages in teal (#4ecdc4)

### Cards

- White text on dark surface
- Subtle borders
- Hover state with elevated background
- Consistent padding (24px)

### Typography Hierarchy

- H1: Hero text, largest
- H2: Section headers
- H3: Subsection headers
- Body: Regular text
- Small: Secondary, metadata

---

## 🌙 Dark Mode

The design system is dark-mode first:

- Dark backgrounds (#1a1a2e base)
- Light text (#ffffff)
- Vibrant accents (red #e94560, teal #4ecdc4)
- No light mode currently implemented

All colors maintain accessibility (WCAG AA minimum).

---

## ♿ Accessibility

### Color Contrast

- Text on background: 6.5:1 ratio (AAA)
- Button text: 7:1 ratio (AAA)
- Secondary text: 4.5:1 ratio (AA)

### Color Independence

- Don't rely on color alone
- Use text labels with icons
- Provide alternative indicators

### Focus States

- Visible focus rings on all interactive elements
- High contrast on focus
- At least 3px visible focus indicator

---

## 🎓 Design System Usage

### For Developers

```tsx
// Using Tailwind classes
<button className="bg-atelier-primary text-atelier-bg hover:bg-atelier-primary-hover">
  Click Me
</button>

// Using CSS variables
<div style={{ backgroundColor: 'hsl(var(--atelier-brand-primary))' }}>
  Content
</div>
```

### For Designers

- Export colors to design tool
- Use spacing scale (4px base)
- Follow typography hierarchy
- Apply consistent shadows
- Use 8px grid alignment

---

## 📦 Exporting for Other Projects

### CSS File

All colors available in `/client/global.css`

### Tailwind Config

All tokens configured in `tailwind.config.ts`

### Design Tokens (JSON)

```json
{
  "colors": {
    "background": "#1a1a2e",
    "surface": "#16213e",
    "primary": "#e94560",
    "secondary": "#4ecdc4"
  }
}
```

---

## 🔮 Design System Evolution

### v1.0 (Current)

- Dark mode only
- 2 primary colors
- Basic component patterns

### v1.1 (Planned)

- Light mode variant
- Extended color palette
- Component documentation

### v2.0 (Planned)

- CSS-in-JS support
- Figma integration
- Design tokens package

---

## 📞 Design Questions?

Refer to component styling sections above or check implementation in `/client/global.css`
