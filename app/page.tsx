import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <ValueProps />
      <ContactCTA />
      <BusinessSchema />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 px-6 py-16 shadow-sm dark:border-zinc-700 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 md:px-14 lg:py-24">
      {/* Background decorative */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        {/* Placeholder for hero image */}
        <div
          className="mx-auto mb-8 h-40 w-full rounded-xl bg-zinc-200/60 backdrop-blur-sm dark:bg-zinc-700/40"
          aria-label="Hero image placeholder"
        />
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Smooth Sail Auto Detail
        </h1>
        <p className="mt-4 text-lg font-medium text-cyan-700 dark:text-cyan-300">
          Serving Kern County since 2020
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          Luxury interior & exterior car detailing that restores the pride of
          driving a spotless, protected vehicle. We come ready to elevate your
          daily drive to showroom glory.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/30 transition hover:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Ready for a Smooth Sail?
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-cyan-600 px-8 py-3 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-300 dark:hover:bg-zinc-800"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceOverview() {
  const services = [
    {
      title: "Exterior Auto Detail",
      blurb:
        "Mirror-like, sparkling & protected exterior for a luxurious outside.",
      href: "/services#exterior",
    },
    {
      title: "Interior Auto Detail",
      blurb:
        "Spotless, sterilized & protected interior for a lavish inside feeling.",
      href: "/services#interior",
    },
    {
      title: "Complete Auto Detail",
      blurb:
        "Restore your ride to showroom glory with interior + exterior perfection.",
      href: "/services#complete",
    },
    {
      title: "Special Treatments",
      blurb: "Headlights, tires, clay bar, paint correction & more!",
      href: "/services#special",
    },
  ];
  return (
    <section className="mt-20" aria-labelledby="services-heading">
      <h2
        id="services-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        We Offer
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group relative flex flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="h-28 w-full rounded-md bg-zinc-100 dark:bg-zinc-800 mb-4 flex items-center justify-center text-xs text-zinc-400">
              Image Placeholder
            </div>
            <h3 className="text-sm font-semibold text-zinc-800 group-hover:text-cyan-700 dark:text-zinc-100 dark:group-hover:text-cyan-300">
              {s.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {s.blurb}
            </p>
            <span className="mt-3 inline-flex items-center text-xs font-medium text-cyan-700 group-hover:underline dark:text-cyan-300">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  const props = [
    {
      title: "Paint Decontamination",
      body: "We remove embedded contaminants others leave behind so protection actually bonds & lasts.",
    },
    {
      title: "Long-Term Protection",
      body: "Ceramic & advanced protectants shield against sun, grime & water spots for months.",
    },
    {
      title: "Healthier Interior",
      body: "Sanitized, allergen-reduced surfaces & deep extraction for a truly fresh cabin feeling.",
    },
    {
      title: "Customer First",
      body: "Simple pricing, clear expectations, real answers by phone. We detail for your goals.",
    },
  ];
  return (
    <section
      className="mt-24 rounded-2xl border border-zinc-200 p-8 dark:border-zinc-700"
      aria-labelledby="value-heading"
    >
      <h2
        id="value-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        The Clean Car Feeling Catered to You
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((p) => (
          <div key={p.title} className="flex flex-col">
            <h3 className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              {p.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="mt-24" aria-labelledby="contact-heading">
      <div className="rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 px-8 py-12 text-white shadow-lg">
        <h2 id="contact-heading" className="text-2xl font-bold tracking-tight">
          Got Questions?
        </h2>
        <p className="mt-3 text-sm max-w-lg">
          Schedule a quick call or text now. We love helping you decide the
          exact level of detailing your vehicle needs.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:16614218658"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-cyan-700 shadow transition hover:bg-cyan-50"
          >
            Call / Text (661) 421-8658
          </a>
          <a
            href="mailto:qwiksaildetail@gmail.com"
            className="rounded-full bg-cyan-800/30 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-cyan-800/40"
          >
            Email Us
          </a>
        </div>
        <address className="mt-6 not-italic text-xs text-cyan-100">
          qwiksaildetail@gmail.com · 4512 Barry St · (661) 421-8658
        </address>
      </div>
    </section>
  );
}

function BusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Smooth Sail Auto Detail",
    image: "https://www.smoothsaildetail.com/placeholder.jpg",
    description:
      "Luxury interior & exterior auto detailing with paint decontamination, ceramic protection & special treatments in Kern County.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4512 Barry St",
      addressLocality: "Kern County",
      addressRegion: "CA",
      postalCode: "",
      addressCountry: "US",
    },
    telephone: "+1-661-421-8658",
    priceRange: "$$",
    areaServed: "Kern County CA",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
    serviceType: [
      "Exterior Auto Detailing",
      "Interior Auto Detailing",
      "Complete Auto Detailing",
      "Paint Correction",
      "Ceramic Coating",
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
