# Fundy's Website - Design & Layout

**Project:** Single-page showcase website for Fundy's Spreads
**Stack:** Next.js + shadcn/ui + Tailwind CSS
**Theme:** Warm & Cozy, minimalist, photo-heavy
**Fonts:** Pacifico (headings) + Inter (body text)

---

## Page Layout (Single-Page Scrolling)

### 1. Header / Navigation (Fixed on scroll)

```
┌─────────────────────────────────────────────────────────────┐
│  FUNDY'S LOGO           Home   About   Our Spreads   Contact │
└─────────────────────────────────────────────────────────────┘
```

- Logo on left (aligned with brand colors)
- Navigation links on right
- Background: Semi-transparent white or cream
- On mobile: Hamburger menu that opens side panel

---

### 2. Hero Section (Full-width Carousel)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           [ Full-width product photo carousel ]             │
│                                                             │
│                                                             │
│              "Artisan Spreads, Made with Love"              │
│                                                             │
│                    [ Shop on Shopee ▶ ]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

- Full-width background images rotating (3-4 product photos)
- Overlay text with tagline (centered)
- CTA button linking to Shopee store
- Navigation dots or arrows for carousel control
- Mobile: Stacked text, single CTA button

---

### 3. Our Spreads Section (Alternating Rows)

```
┌─────────────────────────────────────────────────────────────┐
│                      OUR SPREADS                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  [Photo]        │  QDB Pimiento                             │
│                 │                                            │
│                 │  A savory spread made with premium ...    │
│                 │                                            │
│                 │  ₱XXX   [ Shop on Shopee ▶ ]              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  │  QDB Truffle                             │
│  [Photo]        │                                            │
│                  │  Rich, earthy truffle flavor that ...    │
│                  │                                            │
│                  │  ₱XXX   [ Shop on Shopee ▶ ]              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  [Photo]        │  QDB Spreads                              │
│                 │                                            │
│                 │  Our original signature blend ...         │
│                 │                                            │
│                 │  ₱XXX   [ Shop on Shopee ▶ ]              │
└─────────────────────────────────────────────────────────────┘
```

- Section heading: "Our Spreads" in Pacifico font
- Alternating layout: Image left/text right, then flips
- Each product card:
  - Large product photo
  - Product name
  - Short description (2-3 sentences)
  - Price
  - "Shop on Shopee" button
- Mobile: All stacked vertically (photo top, text below)

---

### 4. About Section (Full-width, After Products)

```
┌─────────────────────────────────────────────────────────────┐
│                      OUR STORY                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  [Photo of        │  From small kitchen to your ...         │
│   kitchen/owner]  │                                          │
│                   │  Fundy's started with a simple passion  │
│                   │  for creating spreads that bring ...     │
│                   │                                          │
│                   │  Every jar is made with love, using ...  │
└─────────────────────────────────────────────────────────────┘
```

- Section heading: "Our Story" in Pacifico font
- Side-by-side layout:
  - Left: Behind-the-scenes photo (kitchen, owner, or process)
  - Right: Story text (2-3 paragraphs)
- Content will be filled in with Ate Stef's actual story
- Mobile: Stacked vertically

---

### 5. Contact / Footer Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Let's Connect!                                            │
│                                                             │
│   🛒 Shop on Shopee                                         │
│   📘 Follow us on Facebook                                  │
│   📷 Follow us on Instagram                                 │
│   🎵 Follow us on TikTok                                    │
│                                                             │
│   📧 Email: hello@fundys.ph                                 │
│   📱 Mobile: +63 XXX XXX XXXX                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
│                    © 2025 Fundy's Spreads                   │
└─────────────────────────────────────────────────────────────┘
```

- Simple, clean footer-style section
- Social media icons/links with labels
- Contact information (email, mobile)
- Copyright notice
- Background: Slightly darker than main content (warm tone)

---

## Color Palette (Warm Earthy Tones)

```
Primary (Background):     #FAF7F2  - Cream/Off-white
Secondary (Accent):       #C4A484  - Warm Terracotta
Tertiary (Text):          #3D3D3D  - Charcoal (softer than black)
Buttons/Links:            #A67B5B  - Warm Brown
Hover state:              #8B5E3C  - Darker Brown
```

---

## Typography

| Usage | Font | Weight | Size |
|-------|------|--------|------|
| Headings (H1, H2, H3) | Pacifico | Regular | 32px - 48px |
| Body text | Inter | Regular | 16px |
| Buttons | Inter | Medium | 14px - 16px |
| Captions | Inter | Regular | 14px |

---

## Component Library (shadcn/ui)

- Button (Shopee CTA)
- Card (Product cards)
- Carousel (Hero section)
- Navigation Menu (Mobile hamburger)

---

## Sections Summary

| Section | Content | Components |
|---------|---------|------------|
| Header | Logo, Nav links | Fixed nav, mobile menu |
| Hero | Carousel, tagline, CTA | Carousel, Button |
| Products | Product showcase | Card, Button |
| About | Story, photo | Text, Image |
| Footer | Social links, contact | Links, Icons |

---

## Next Steps

1. Set up Next.js project with shadcn/ui
2. Configure Tailwind with custom colors and fonts
3. Build Header/Navigation component
4. Build Hero Carousel component
5. Build Product Card component (alternating layout)
6. Build About section component
7. Build Footer component
8. Populate with actual content from Ate Stef
9. Add professional photos when received
10. Deploy and test on mobile
