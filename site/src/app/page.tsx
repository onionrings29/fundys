import Image from "next/image";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import LightboxImage from "@/components/Lightbox";
import ContactForm from "@/components/ContactForm";

const lifestylePhotos = [
  { src: "/images/lifestyle/pandesal-flatlay.jpg", caption: "Morning pandesal & coffee" },
  { src: "/images/lifestyle/spreading.jpg", caption: "On fresh sourdough" },
  { src: "/images/lifestyle/restaurant.jpg", caption: "At the table" },
  { src: "/images/lifestyle/jar-closeup.jpg", caption: "Straight from the jar" },
  { src: "/images/lifestyle/basil-pesto-bowl.jpg", caption: "Basil Pesto de Bola" },
];

// All posts with real pixel dimensions for dynamic column assignment
const socialPosts = [
  { src: "/images/social/bbear_sunshine.jpg",  alt: "Threads post by @bbear_sunshine",              w: 1380, h: 1770 },
  { src: "/images/social/danicekaye.jpg",       alt: "Threads post by @danicekaye",                  w: 1179, h: 1362 },
  { src: "/images/social/hazelnutte.jpg",       alt: "Threads post by @hazelnutte",                  w: 1179, h: 1300 },
  { src: "/images/social/instagram-story.jpg",  alt: "Instagram story — pangatlo ko na tong jar",    w: 1179, h: 1150 },
  { src: "/images/social/nugsbea.jpg",          alt: "Threads post by @nugsbea",                     w: 1380, h: 1718 },
  { src: "/images/social/people.jpg",           alt: "Customers enjoying Fundy's at an event",       w: 1179, h: 1572 },
  { src: "/images/social/riesbanzil.jpg",       alt: "Threads post by @riesbanzil",                  w: 1179, h: 1568 },
  { src: "/images/social/tsimis.jpg",           alt: "Threads post — di sia tsimis",                 w: 1378, h: 1822 },
  { src: "/images/social/ughsam.jpg",           alt: "Instagram story by @ughsam",                   w: 1056, h: 1828 },
];

// Split posts into equal sequential groups, then sort so the tallest group
// is always rendered in the centre slot. O(n) — no brute-force search.
function sortColumnsMiddleTallest<T extends { w: number; h: number }>(posts: T[], perCol = 3): T[][] {
  const sumR = (col: T[]) => col.reduce((s, p) => s + p.h / p.w, 0);
  const cols: T[][] = [];
  for (let i = 0; i < posts.length; i += perCol) cols.push(posts.slice(i, i + perCol));
  cols.sort((a, b) => sumR(a) - sumR(b)); // ascending: [shortest, ..., tallest]
  // Rearrange so tallest (last) is in the middle slot
  return [cols[0], cols[cols.length - 1], cols[1]];
}

// Computed at build time — reorder socialPosts and this self-adjusts
const socialColumnsMobile = sortColumnsMiddleTallest(socialPosts);

// Desktop: 1-2-3-2-1 across 5 columns (design-driven, not height-driven)
const socialColumns = [
  [socialPosts[3]], // instagram-story
  [socialPosts[1], socialPosts[2]], // danicekaye, hazelnutte
  [socialPosts[4], socialPosts[0], socialPosts[7]], // nugsbea, bbear, tsimis
  [socialPosts[6], socialPosts[8]], // riesbanzil, ughsam
  [socialPosts[5]], // people
];

const products = [
  {
    name: "Quezo de Bola Pimiento",
    subtitle: "Gourmet Cheese Spread",
    description:
      "Made with aged Quezo de Bola (Edam) from the Netherlands and sweet roasted pimientos. Perfect on crackers, toasted bread, or as a dip.",
    image: "/images/products/pimiento.png",
    weight: "200g",
    price: "₱270",
    rating: "4.9",
    sold: "2K+",
    ingredients: ["Edam Cheese", "Roasted Pimientos", "Netherlands Import"],
    isNew: false,
  },
  {
    name: "Truffle de Bola",
    subtitle: "Gourmet Cheese Spread",
    description:
      "Made with aged Quezo de Bola (Edam) from the Netherlands and truffle. Perfect on crackers, toasted bread, or as a dip.",
    image: "/images/products/truffle.png",
    weight: "200g",
    price: "₱270",
    rating: "4.9",
    sold: "1K+",
    ingredients: ["Edam Cheese", "Truffle", "Netherlands Import"],
    isNew: false,
  },
  {
    name: "Basil Pesto de Bola",
    subtitle: "Gourmet Cheese Spread",
    description:
      "Made with aged Quezo de Bola (Edam) from the Netherlands and fresh basil pesto. A savory, herbaceous spread perfect on bread, crackers, or pasta.",
    image: "/images/products/basil-pesto.png",
    weight: "200g",
    price: "₱270",
    rating: "4.9",
    sold: "New",
    ingredients: ["Edam Cheese", "Basil Pesto", "Netherlands Import"],
    isNew: true,
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/officialfundys/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/fundysspread/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://vt.tiktok.com/ZSHwG1QXMKHqH-V9Jip",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
      </svg>
    ),
  },
  {
    name: "Shopee",
    href: "https://ph.shp.ee/P4KVv5v",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C9.243 2 7 4.243 7 7h2c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5zM4 7l-1 17h18L20 7H4zm4 2h8v2a4 4 0 01-8 0V9z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* ==================== HERO ==================== */}
      <section className="relative flex min-h-svh flex-col items-center justify-start sm:justify-center overflow-hidden px-4 pt-[72px] pb-12 sm:px-6 sm:pt-24 sm:pb-16">
<div className="relative z-10 flex flex-col items-center text-center">
          {/* Brand wordmark */}
          <div className="hero-item hero-item-1">
            <Image
              src="/images/logo/Logo-wordmark.png"
              alt="Fundy's"
              width={1556}
              height={454}
              className="hero-wordmark h-auto w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]"
              priority
            />
          </div>

          {/* Brand words */}
          <p className="hero-item hero-item-2 mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:mt-6 sm:text-[13px]">
            Warm &middot; Familiar &middot; Comforting
          </p>

          {/* Divider + product image */}
          <div className="hero-item hero-item-3">
            <div className="divider-ornament mt-5 mb-4 text-accent sm:mt-6 sm:mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5 sm:h-3 sm:w-3">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <div className="relative my-2 sm:my-4">
              <Image
                src="/images/products/bundle.png"
                alt="Fundy's Quezo de Bola Pimiento and Truffle de Bola"
                width={560}
                height={400}
                className="h-auto w-[85vw] max-w-[560px] drop-shadow-2xl sm:w-[420px] md:w-[480px] lg:w-[560px]"
                priority
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="hero-item hero-item-4">
            <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-charcoal-light sm:mt-4 sm:text-sm sm:tracking-[0.25em] md:text-base">
              Gourmet Cheese Spread
            </p>
            <p className="mt-1.5 font-body text-[12px] italic tracking-wide text-accent sm:mt-2 sm:text-[13px] md:text-sm">
              Made with Imported Edam Cheese
            </p>
          </div>

          {/* CTA */}
          <div className="hero-item hero-item-5 mt-6 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="https://ph.shp.ee/P4KVv5v"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center sm:w-auto"
            >
              Shop on Shopee
            </a>
            <a href="#spreads" className="btn-outline w-full text-center sm:w-auto">
              Explore Our Spreads
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-accent sm:h-5 sm:w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </section>

      {/* ==================== OUR SPREADS ==================== */}
      <section id="spreads" className="relative bg-cream-dark px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <ScrollReveal className="mb-10 text-center sm:mb-16">
          <h2 className="font-display text-3xl text-brand-red sm:text-4xl md:text-5xl">
            Our Spreads
          </h2>
          <div className="divider-ornament mt-4 text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-charcoal-light sm:mt-6 sm:text-base">
            Handcrafted in small batches with imported Edam cheese. Three
            distinctive flavors, each with its own character.
          </p>
        </ScrollReveal>

        {/* Product grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-0 pt-4 md:grid-cols-3 md:items-stretch md:gap-6 md:pt-0">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} animation="reveal-scale" delay={i * 0.12} className="md:h-full">
                {i > 0 && (
                  <div className="mx-auto mb-10 h-[1px] w-16 bg-accent/30 md:hidden" />
                )}
                <div className="group relative rounded-none bg-transparent p-0 pb-10 text-center shadow-none md:product-card md:flex md:h-full md:flex-col md:rounded-xl md:bg-card-bg md:p-7 md:pb-8 md:shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
                  {/* NEW badge */}
                  {product.isNew && (
                    <div className="absolute top-3 right-3 z-10 hidden md:block">
                      <span className="rounded-full bg-brand-red px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cream">
                        New
                      </span>
                    </div>
                  )}

                  {/* Product image */}
                  <LightboxImage
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="mx-auto mb-6 block sm:mb-8"
                  >
                    {/* Shadow wrapper separate from overflow-hidden to render on all browsers */}
                    <div className="rounded-xl shadow-[0_6px_28px_rgba(0,0,0,0.10)] transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="aspect-square w-full overflow-hidden rounded-xl bg-card-bg-tinted">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={280}
                          height={280}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </LightboxImage>

                  {/* Product info */}
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                    {product.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-charcoal md:text-[26px]">
                    {product.name}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs font-body text-sm leading-relaxed text-charcoal-light">
                    {product.description}
                  </p>

                  {/* Ingredient pills */}
                  <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {product.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="rounded-full border border-accent/35 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-accent"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Spacer pushes price to bottom on equal-height cards */}
                  <div className="hidden md:block md:flex-1" />

                  {/* Price & rating */}
                  <div className="mt-5 flex items-center justify-center gap-4">
                    <span className="text-xl font-semibold text-brand-red">
                      {product.price}
                    </span>
                    <span className="text-xs text-charcoal-light">{product.weight}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2 text-xs text-accent">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-amber-500">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {product.rating}
                    </span>
                    <span className="text-charcoal-light/40">|</span>
                    <span>{product.sold} sold</span>
                  </div>

                  {/* Order button */}
                  <a
                    href="https://ph.shp.ee/P4KVv5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-5 inline-block w-full text-center text-[13px]"
                  >
                    Order on Shopee
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bundle banner */}
        <ScrollReveal className="mt-6 sm:mt-16 md:mt-20" delay={0.1}>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-10 h-[1px] w-16 bg-accent/30 md:hidden" />
            <div className="overflow-hidden rounded-none bg-transparent md:rounded-xl md:bg-card-bg md:shadow-[0_2px_24px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col items-center gap-4 p-0 sm:gap-8 md:flex-row md:p-12">
                <LightboxImage
                  src="/images/products/bundle.png"
                  alt="Fundy's Spreads Bundle"
                  width={320}
                  height={240}
                  className="flex-shrink-0"
                >
                  <Image
                    src="/images/products/bundle.png"
                    alt="Fundy's Spreads Bundle"
                    width={320}
                    height={240}
                    className="h-auto w-[70vw] max-w-[288px] drop-shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </LightboxImage>
                <div className="text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                    Reseller&apos;s Package
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-charcoal md:text-3xl">
                    Reseller's Package
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-charcoal-light">
                    24 jars per box — all three flavors available. Ideal for online
                    selling, pasabuy, corporate giveaways, or gifting in bulk.
                  </p>
                  <p className="mt-3 text-lg font-semibold text-brand-red">
                    ₱5,520
                    <span className="ml-2 text-xs font-normal text-charcoal-light">
                      (24 jars)
                    </span>
                  </p>
                  <a
                    href="https://ph.shp.ee/P4KVv5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 inline-block text-center text-[13px]"
                  >
                    Order on Shopee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ==================== LIFESTYLE PHOTOS ==================== */}
      <section className="bg-cream px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <ScrollReveal className="mb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
            How People Enjoy It
          </p>
          <h2 className="mt-3 font-display text-3xl text-brand-red sm:text-4xl">
            Perfect Every Time
          </h2>
          <div className="divider-ornament mt-4 text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl">
          {/* Top row — 3 photos */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {lifestylePhotos.slice(0, 3).map((photo, i) => (
              <ScrollReveal key={i} animation="reveal-scale" delay={i * 0.08}>
                <LightboxImage src={photo.src} alt={photo.caption} width={500} height={500}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden rounded-xl bg-card-bg-tinted">
                      <Image src={photo.src} alt={photo.caption} width={500} height={500}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="mt-1.5 text-center text-[10px] tracking-wide text-charcoal-light">{photo.caption}</p>
                  </div>
                </LightboxImage>
              </ScrollReveal>
            ))}
          </div>
          {/* Bottom row — 2 photos */}
          <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-3 sm:gap-3">
            {lifestylePhotos.slice(3).map((photo, i) => (
              <ScrollReveal key={i} animation="reveal-scale" delay={(i + 3) * 0.08}>
                <LightboxImage src={photo.src} alt={photo.caption} width={500} height={500}>
                  <div className="group">
                    <div className="aspect-square overflow-hidden rounded-xl bg-card-bg-tinted">
                      <Image src={photo.src} alt={photo.caption} width={500} height={500}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <p className="mt-1.5 text-center text-[10px] tracking-wide text-charcoal-light">{photo.caption}</p>
                  </div>
                </LightboxImage>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOCIAL BUZZ ==================== */}
      <section className="bg-cream-dark px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <ScrollReveal className="mb-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
            Threads &amp; Instagram
          </p>
          <h2 className="mt-3 font-display text-3xl text-brand-red sm:text-4xl">
            People Are Sharing
          </h2>
          <div className="divider-ornament mt-4 text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-5xl">
          {/* 3 columns, tallest in middle (all screen sizes) */}
          <div className="flex items-start gap-1.5 sm:gap-2 lg:gap-3">
            {socialColumnsMobile.map((col, ci) => (
              <div key={ci} className="flex flex-1 flex-col gap-1.5 sm:gap-2 lg:gap-3">
                {col.map((post, pi) => (
                  <ScrollReveal key={pi} animation="reveal-scale" delay={Math.min(ci * 0.08 + pi * 0.06, 0.4)}>
                    <LightboxImage src={post.src} alt={post.alt} width={post.w} height={post.h}>
                      <div className="max-h-[253px] sm:max-h-[322px] lg:max-h-[400px] overflow-hidden rounded-lg sm:rounded-xl shadow-sm cursor-zoom-in">
                        <Image
                          src={post.src}
                          alt={post.alt}
                          width={post.w}
                          height={post.h}
                          className="h-auto w-full"
                        />
                      </div>
                    </LightboxImage>
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
        {/* Top wave */}
        <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden">
          <svg viewBox="0 0 1440 56" className="w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,56 C360,0 1080,0 1440,56 L1440,0 L0,0 Z" fill="var(--cream)" />
          </svg>
        </div>
        {/* Bottom wave */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
          <svg viewBox="0 0 1440 56" className="w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,0 C360,56 1080,56 1440,0 L1440,56 L0,56 Z" fill="var(--cream)" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ background: "var(--testimonial-section-tint)" }} />

        <div className="relative">
          {/* Header */}
          <ScrollReveal className="text-center">
            <div className="divider-ornament mb-6 text-accent">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h2 className="font-display text-3xl text-brand-red sm:text-4xl">
              What People Are Saying
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-500">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5 text-sm font-medium text-charcoal">4.9</span>
              <span className="text-sm text-charcoal-light">· 680+ ratings on Shopee</span>
            </div>
          </ScrollReveal>

          {/* Masonry review wall */}
          <div className="mx-auto mt-8 max-w-7xl sm:mt-10 [columns:1] sm:[columns:2] lg:[columns:3] [column-gap:1.25rem]">
            {[
              {
                user: "addtocart.z",
                date: "Jan 21, 2026",
                text: "Best feature: very secure packaging. No need to worry about the glass being shattered during transport — 3 layers of protection for the glass jar.\n\nHave tried their 3 flavors! I like truffle the most. Hindi tinipid sa truffle. Lasang lasa yung pagka-truffle niya. All their variants are good!! Try it with sourdough 👌\n\nOnly problem: ang bilis maubos 😭",
              },
              {
                user: "_*****i",
                date: "Feb 11, 2026",
                text: "Quality: Very smooth and creamy. Very premium quality of spread.\nTexture: Creamy with a few cheese chunks.\n\nSo yummy! This is my fave cheese spread now. The cheese taste is wonderful, not too strong, and with a hint of truffle? Perfect!",
              },
              {
                user: "m*****s",
                date: "Jan 30, 2026",
                text: "Quality: Very good\nTaste: Delicious\n\nI am not really a fan of cheese. I only eat it when it comes with a burger or in pasta. Decided to give this product a try because I always see videos of this in another app. It did not disappoint! Masarap sya! Not too salty, hindi nakakasawa. Like this with my hot pan de sal. Will surely order again!",
              },
              {
                user: "i*****3",
                date: "Jan 31, 2026",
                text: "Quality: The quality feels good and the packaging is very secure.\nTaste: The truffle flavor is rich and very satisfying in every bite!\n\nAng sarap!! Never stop making these please.",
              },
              {
                user: "c*****c",
                date: "Jan 19, 2026",
                text: "The perfect post-holiday in a jar treat. Best for cheese lovers or those who want to get a spread that feels much more gourmet. I enjoyed pairing it with butter croissant and hot brewed coffee. Yummy~! Thank you and I will definitely order again! :)",
              },
              {
                user: "zenralois",
                date: "Feb 9, 2026",
                text: "Received complete, properly sealed, and taste good! Bought it at a discounted price also. Will buy again other flavor naman ❤️ Thank you Shopee and seller!",
              },
              {
                user: "i*****o",
                date: "Feb 4, 2026",
                text: "Absolutely love this truffle cheese spread! Smooth, flavorful, and perfect on bread or crackers. Definitely hitting the spot.",
              },
            ].map((review, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.3)} className="mb-5 inline-block w-full break-inside-avoid">
                <div className="relative rounded-xl p-5 shadow-sm backdrop-blur-sm sm:p-6" style={{ background: "var(--testimonial-bg)" }}>
                  {/* Header row */}
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 text-[11px] font-semibold text-accent">
                        {review.user[0].toUpperCase()}
                      </div>
                      <span className="text-[13px] font-medium text-charcoal">{review.user}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-amber-500">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  {/* Review text */}
                  <p className="whitespace-pre-line font-body text-sm leading-relaxed text-charcoal-light">
                    {review.text}
                  </p>
                  {/* Date */}
                  <p className="mt-3 text-[11px] text-charcoal-light/50">{review.date} · via Shopee</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA to Shopee */}
          <ScrollReveal className="mt-2 text-center" delay={0.3}>
            <a
              href="https://ph.shp.ee/P4KVv5v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-red transition-colors hover:text-brand-red-hover"
            >
              See all 680+ reviews on Shopee
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section id="story" className="relative overflow-hidden px-6 py-14 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-cream-dark to-cream" />

        <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <ScrollReveal animation="reveal-left">
            <Image
              src="/images/products/pimiento-group.png"
              alt="Fundy's Quezo de Bola Pimiento"
              width={600}
              height={500}
              className="rounded-xl shadow-[0_8px_40px_rgba(139,26,26,0.08)]"
            />
          </ScrollReveal>

          <ScrollReveal animation="reveal-right" delay={0.15}>
            <div>
              <h2 className="font-display text-4xl text-brand-red md:text-5xl">
                Our Story
              </h2>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[1.5px] w-12 bg-accent" />
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5 text-accent">
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <p className="mt-2 text-sm italic text-accent">Warm. Familiar. Comforting.</p>

              <div className="mt-8 space-y-5 font-body text-[15px] leading-[1.8] text-charcoal-light">
                <p>
                  Fundy&apos;s started in our home kitchen, making small batches
                  of quezo de bola gourmet cheese spreads for family and friends.
                  We use real Edam cheese imported from the Netherlands and
                  cheddar cheese, carefully prepared and blended by hand in small
                  batches.
                </p>
                <p>
                  Our goal has always been simple — to extend the feeling of
                  Christmas, even beyond the holidays. The kind that feels warm,
                  familiar, and comforting. Something you can enjoy anytime, as
                  if the experience is within reach.
                </p>
                <p>
                  We currently offer two flavors: Quezo de Bola Pimiento and
                  Truffle de Bola. Made with care, meant to be shared, and
                  created to bring a little bit of that Christmas joy to your
                  table, any day of the year.
                </p>
              </div>

              <a
                href="https://www.instagram.com/officialfundys/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-8 inline-block text-[13px]"
              >
                Follow Our Journey
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOOTER / CONTACT ==================== */}
      <footer id="contact" className="relative bg-brand-red px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Wordmark logo */}
          <ScrollReveal>
            <Image
              src="/images/logo/Logo-wordmark.png"
              alt="Fundy's"
              width={1556}
              height={454}
              className="mx-auto h-auto w-[160px] brightness-0 invert opacity-90 sm:w-[200px]"
            />
            <div className="divider-ornament mt-6 mb-6 text-cream/30">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-2 w-2">
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h2 className="font-display text-3xl text-cream md:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-cream/65">
              Have a question or want to order in bulk? Send us a message and
              we&apos;ll get back to you.
            </p>
          </ScrollReveal>

          {/* Contact form — before social links */}
          <ScrollReveal delay={0.15}>
            <ContactForm />
          </ScrollReveal>

          {/* Divider */}
          <div className="mx-auto mt-14 h-[1px] max-w-xs bg-cream/15" />

          {/* Social links */}
          <ScrollReveal delay={0.25}>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-cream/40">
              Find us on
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-full border border-cream/20 px-5 py-2.5 text-cream transition-all duration-300 hover:border-cream/60 hover:bg-cream/10"
                >
                  {social.icon}
                  <span className="text-sm font-medium tracking-wide">{social.name}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.35}>
            <div className="mt-10 flex flex-col items-center gap-2 text-sm text-cream/40">
              <p>JP Rizal Street, Brgy. Pipisik, Gumaca, Quezon</p>
              <p>0966-693-0825 &middot; Mon–Fri, 9:00 AM – 5:00 PM</p>
            </div>
          </ScrollReveal>

          {/* Copyright */}
          <div className="mx-auto mt-10 h-[1px] max-w-xs bg-cream/10" />
          <p className="mt-6 text-xs tracking-wide text-cream/25">
            &copy; {new Date().getFullYear()} Fundy&apos;s Spreads. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
