# Project History - Sneha's Arts

> **MANDATORY UPDATE RULE**: This file MUST be updated whenever code is pushed to production. Claude (or the developer) should add an entry to the Changelog section documenting what changed, why, and any important context. This ensures future Claude sessions can quickly understand the project's evolution.

---

## Quick Context for New Sessions

**What is this?** An online art store for Sneha, a talented artist in Vancouver. The store sells original paintings and handcrafted earrings, blending Indian artistic heritage with West Coast aesthetics.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS

**Key Files to Know:**
- `src/lib/data.ts` - All product data and store configuration
- `src/components/` - Reusable UI components (Header, Footer, ProductCard, ProductDetail)
- `src/app/` - Pages using Next.js App Router
- `CLAUDE.md` - Full technical documentation
- `SESSION_JOURNAL.md` - Origin story and initial build session

**Current State:** MVP complete with 6 products (3 paintings, 3 earrings). Email-based ordering. Ready for Vercel deployment.

---

## Project Documentation Map

| File | Purpose |
|------|---------|
| `PROJECT_HISTORY.md` | This file - changelog and session context (READ FIRST) |
| `CLAUDE.md` | Technical documentation, project structure, how-to guides |
| `SESSION_JOURNAL.md` | Origin story - the "why" behind the project |

---

## Current Feature Status

### Implemented
- [x] Homepage with hero, featured products, category preview
- [x] Paintings category page and individual product pages
- [x] Earrings category page and individual product pages
- [x] About page with artist story
- [x] Email-based ordering system (no payment integration)
- [x] Mobile-responsive design
- [x] Premium Indian-Vancouver fusion aesthetic
- [x] Static generation for all product pages
- [x] **Vibrant multi-color gradients throughout the site** (saffron → burgundy → forest)

### Not Yet Implemented
- [ ] Payment integration (Stripe)
- [ ] Shopping cart functionality
- [ ] Customer reviews
- [ ] Instagram feed integration
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Product filtering/sorting

---

## Known Issues & Technical Debt

1. **Email inconsistency**: Some pages hardcode `hello@ananyaarts.ca` instead of using `storeInfo.email` (`hello@snehasarts.ca`). Should be fixed to use `storeInfo.email` consistently.

2. **Metadata inconsistency**: Some page titles reference "Ananya Arts" instead of "Sneha's Arts".

---

## Changelog

### January 15, 2026 - Initial Build (Session 1)
**Developer:** Jatin Rajvanshi with Claude Code

**What was built:**
- Complete Next.js 16 project structure
- Custom design system (saffron, burgundy, forest, gold color palette)
- Premium typography (Cormorant Garamond, Playfair Display, Raleway)
- Header with lotus-inspired logo and mobile navigation
- Footer with Indian-inspired decorative elements
- Homepage with hero section, featured products, category previews
- About page with artist story
- Paintings category and detail pages
- Earrings category and detail pages
- ProductCard and ProductDetail reusable components
- Email-based ordering system
- All 6 products with real images and descriptions
- Documentation (CLAUDE.md, SESSION_JOURNAL.md)

**Context:** Built as a gift - a husband wanting to showcase his wife's art to the world. Originally named "Ananya Arts", renamed to "Sneha's Arts" during the session.

**Repository:** https://github.com/jatinrajvanshi13/snehas-arts.git

---

### January 21, 2026 - Documentation Update (Session 2)
**Developer:** Claude Code

**What changed:**
- Created `PROJECT_HISTORY.md` (this file) for tracking changes across sessions
- Established mandatory update rule for production pushes

**Context:** Setting up proper documentation workflow so future Claude sessions can quickly understand project history and current state.

---

### January 21, 2026 - Vibrant Gradients Enhancement (Session 2 continued)
**Developer:** Claude Code

**What changed:**

**New CSS Utilities (globals.css):**
- `gradient-sunset` - Saffron → burgundy flowing gradient
- `gradient-indian-summer` - Full warm spectrum gradient
- `gradient-forest-gold` - Forest → gold gradient
- `gradient-celebration` - Multi-color celebration gradient (all 4 colors)
- `gradient-heritage` - Heritage-inspired multi-color gradient
- `gradient-animated` - 15-second animated shifting gradient
- `gradient-text-sunset`, `gradient-text-vibrant`, `gradient-text-celebration` - Gradient text effects
- `gradient-border` - Multi-color gradient borders
- `glow-saffron`, `glow-burgundy`, `glow-forest`, `glow-multi` - Colorful glow effects
- `underline-gradient` - Animated gradient underline on hover
- `rainbow-divider` - Full spectrum rainbow divider
- `dots-colorful` - Multi-color dot pattern background

**Homepage Updates:**
- Hero: Colorful floating gradient orbs, vibrant mandala patterns
- Headlines: Vibrant gradient text effects
- Buttons: Multi-color gradient CTAs with glow effects
- Rainbow dividers between sections
- Story section: Soft forest wash background, gradient text
- Featured products: Colorful background orbs, gradient decorations
- Category cards: Gradient overlays on hover, gradient buttons
- Contact CTA: Animated gradient background with floating orbs

**Header Updates:**
- Logo: Multi-color gradient lotus petals
- Tagline: Gradient text
- Contact button: Saffron → burgundy → forest gradient
- Nav underlines: Multi-color gradient animation

**Footer Updates:**
- Double rainbow border (3px + 1px gradients)
- Logo: Gradient lotus petals
- Section headings: Gradient text
- Animated floating color dots

**ProductCard Updates:**
- Gradient border glow on hover
- Gradient overlay on image hover
- Featured badge: Saffron → burgundy gradient
- Category labels: Context-aware gradient text
- Price: Celebration gradient
- Order buttons: Category-specific gradients (paintings = warm, earrings = cool)

**Context:** Artist loves bright colors, so we brought the full color palette to life with flowing multi-color gradients while maintaining the premium aesthetic.

---

## How to Update This File

When pushing code to production, add a new entry to the Changelog section:

```markdown
### [Date] - [Brief Title] (Session N)
**Developer:** [Name/Claude Code]

**What changed:**
- Bullet points of changes made

**Context:** Why these changes were made, any decisions or tradeoffs

**Related commits:** [optional - commit hashes]
```

---

## Session Continuity Notes

Use this section to leave notes for future sessions:

- *No notes yet*

---

*Last updated: January 21, 2026 (Vibrant Gradients Update)*
