import Image from "next/image";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import LightboxImage from "@/components/Lightbox";
import ContactForm from "@/components/ContactForm";

const products = [
  {
    name: "Quezo de Bola Pimiento",
    subtitle: "Gourmet Cheese Spread",
    description:
      "Made with Marca Pato, aged Quezo de Bola (Edam Cheese) from Netherlands, and sweet roasted pimientos. Perfect on crackers, toasted bread, or as a dip with chips.",
    image: "/images/products/pimiento.png",
    weight: "200g",
    price: "₱270",
    rating: "4.9",
    sold: "2K+",
  },
  {
    name: "Truffle de Bola",
    subtitle: "Gourmet Cheese Spread",
    description:
      "Made with Marca Pato, aged Quezo de Bola (Edam Cheese) from Netherlands, and truffle. Perfect on crackers, toasted bread, or as a dip with chips.",
    image: "/images/products/truffle.png",
    weight: "200g",
    price: "₱270",
    rating: "4.9",
    sold: "1K+",
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
      <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16">
        {/* Subtle radial glow behind product */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-accent/10 blur-[100px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Brand wordmark logo */}
          <Image
            src="/images/logo/Logo-wordmark.png"
            alt="Fundy's"
            width={1556}
            height={454}
            className="h-auto w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]"
            priority
          />

          {/* Brand words */}
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.3em] text-accent sm:mt-6 sm:text-[13px]">
            Warm &middot; Familiar &middot; Comforting
          </p>

          {/* Decorative divider */}
          <div className="divider-ornament mt-5 mb-4 text-accent sm:mt-6 sm:mb-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5 sm:h-3 sm:w-3">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          {/* Hero product image — large on mobile */}
          <div className="relative my-2 sm:my-6">
            <Image
              src="/images/products/bundle.png"
              alt="Fundy's Quezo de Bola Pimiento and Truffle de Bola"
              width={560}
              height={400}
              className="h-auto w-[85vw] max-w-[560px] drop-shadow-2xl sm:w-[420px] md:w-[480px] lg:w-[560px]"
              priority
            />
          </div>

          {/* Tagline */}
          <p className="mt-2 font-body text-xs font-medium uppercase tracking-[0.2em] text-charcoal-light sm:mt-4 sm:text-sm sm:tracking-[0.25em] md:text-base">
            Gourmet Cheese Spread
          </p>
          <p className="mt-1.5 font-body text-[12px] italic tracking-wide text-accent sm:mt-2 sm:text-[13px] md:text-sm">
            Made with Imported Edam Cheese
          </p>

          {/* CTA */}
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 text-accent sm:h-5 sm:w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ==================== OUR SPREADS ==================== */}
      <section id="spreads" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
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
            Handcrafted in small batches with imported Edam cheese. Two
            distinctive flavors, each with its own character.
          </p>
        </ScrollReveal>

        {/* Product grid */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-0 pt-4 md:grid-cols-2 md:gap-12 md:pt-0">
            {products.map((product, i) => (
              <ScrollReveal
                key={product.name}
                animation="reveal-scale"
                delay={i * 0.15}
              >
                {/* Divider between products on mobile */}
                {i > 0 && (
                  <div className="mx-auto mb-10 h-[1px] w-16 bg-accent/30 md:hidden" />
                )}
                <div className="group rounded-none bg-transparent p-0 pb-10 text-center shadow-none md:product-card md:rounded-lg md:bg-white md:p-10 md:pb-10 md:shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  {/* Product image — circular crop, tap to zoom */}
                  <LightboxImage
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="mx-auto mb-6 flex items-center justify-center sm:mb-8"
                  >
                    <div className="aspect-square w-[95%] overflow-hidden rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={280}
                        height={280}
                        className="h-full w-full object-cover"
                      />
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

                  {/* Price & rating */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <span className="text-xl font-semibold text-brand-red">
                      {product.price}
                    </span>
                    <span className="text-xs text-charcoal-light">
                      {product.weight}
                    </span>
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

                  <a
                    href="https://ph.shp.ee/P4KVv5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 w-full text-center text-[13px] sm:w-auto"
                  >
                    Shop on Shopee
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bundle banner */}
        <ScrollReveal className="mt-6 sm:mt-16 md:mt-20" delay={0.1}>
          <div className="mx-auto max-w-4xl">
            {/* Divider on mobile */}
            <div className="mx-auto mb-10 h-[1px] w-16 bg-accent/30 md:hidden" />

            <div className="overflow-hidden rounded-none bg-transparent md:rounded-lg md:bg-white md:shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
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
                <div className="text-center md:text-left">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                    Reseller&apos;s Package
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-charcoal md:text-3xl">
                    Get Both Flavors
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-charcoal-light md:mx-0">
                    24 jars per box — both best-selling flavors. Ideal for online
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
                    className="btn-primary mt-6 w-full text-center text-[13px] sm:w-auto"
                  >
                    Order on Shopee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
        <ScrollReveal className="text-center">
          <div className="divider-ornament mb-6 text-accent">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-2.5 w-2.5">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-500">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-2 text-sm font-medium text-charcoal">
            4.9 out of 5
            <span className="ml-1 font-normal text-charcoal-light">
              · 680+ ratings on Shopee
            </span>
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-12 sm:grid-cols-3 sm:gap-8">
          {[
            {
              quote: "Sobrang sarap! Perfect sa crackers and bread. Will definitely order again.",
              name: "Shopee Buyer",
            },
            {
              quote: "The truffle flavor is amazing — you can really taste the quality. Great for gifts too!",
              name: "Shopee Buyer",
            },
            {
              quote: "Parang Christmas na Christmas yung lasa. My family loved it!",
              name: "Shopee Buyer",
            },
          ].map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="text-center">
                <p className="font-body text-sm leading-relaxed text-charcoal-light italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <cite className="mt-3 block text-xs font-medium not-italic text-accent">
                  — {review.name}
                </cite>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section id="story" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
        {/* Warm background band */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream via-cream-dark/40 to-cream" />

        <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <ScrollReveal animation="reveal-left">
            <Image
              src="/images/products/pimiento-group.png"
              alt="Fundy's Quezo de Bola Pimiento"
              width={600}
              height={500}
              className="rounded-lg"
            />
          </ScrollReveal>

          {/* Story text */}
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

              <p className="mt-2 text-sm italic text-accent">
                Warm. Familiar. Comforting.
              </p>

              <div className="mt-8 space-y-5 font-body text-[15px] leading-[1.8] text-charcoal-light">
                <p>
                  Fundy&apos;s started in our home kitchen, making small batches
                  of quezo de bola gourmet cheese spreads for family and
                  friends. We use real Edam cheese imported from the Netherlands
                  and cheddar cheese, carefully prepared and blended by hand in
                  small batches.
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
                className="btn-outline mt-8 text-[13px]"
              >
                Follow Our Journey
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FOOTER / CONTACT ==================== */}
      <footer id="contact" className="relative bg-brand-red px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Brand */}
          <ScrollReveal>
            <h2 className="font-display text-4xl text-cream md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-cream/70">
              Find us on your favorite platform or visit our Shopee store to
              order. We&apos;d love to hear from you!
            </p>
          </ScrollReveal>

          {/* Social links */}
          <ScrollReveal delay={0.15}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-full border border-cream/20 px-5 py-3 text-cream transition-all duration-300 hover:border-cream/60 hover:bg-cream/10"
                >
                  {social.icon}
                  <span className="text-sm font-medium tracking-wide">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.25}>
            <ContactForm />
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.35}>
            <div className="mt-14 flex flex-col items-center gap-3 text-sm text-cream/50">
              <p>JP Rizal Street, Brgy. Pipisik, Gumaca, Quezon</p>
              <p>0966-693-0825</p>
              <p>Mon–Fri, 9:00 AM – 5:00 PM</p>
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="mx-auto mt-14 h-[1px] max-w-xs bg-cream/10" />

          {/* Copyright */}
          <p className="mt-8 text-xs tracking-wide text-cream/30">
            &copy; {new Date().getFullYear()} Fundy&apos;s Spreads. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
