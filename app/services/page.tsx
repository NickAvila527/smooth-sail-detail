(function () {});
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Services | Smooth Sail Auto Detail Exterior Interior Complete Treatments",
  description:
    "Exterior, interior, complete showroom auto detailing plus paint correction, clay bar, ceramic coating & specialty treatments in Kern County.",
};

export default function ServicesPage() {
  return (
    <div className="py-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Detailing Services
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          High-retention detailing built for protection, pride & longevity.
          Explore our core services and specialty treatments below.
        </p>
      </header>
      <Exterior />
      <Interior />
      <Complete />
      <Special />
      <ServiceSchema />
    </div>
  );
}

function SectionWrapper({
  id,
  title,
  children,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-16 scroll-mt-24"
    >
      <div className="flex flex-col gap-4">
        <div>
          <h2
            id={`${id}-heading`}
            className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>
        <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-700">
          {/* Placeholder image */}
          <div className="mb-6 h-36 w-full rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
            Image Placeholder
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function Exterior() {
  return (
    <SectionWrapper
      id="exterior"
      title="Luxury Exterior Auto Detail"
      subtitle="More than a car wash: decontamination, correction foundations & durable protection."
    >
      <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
        <li>Foam cannon pH-balanced pre-soak & hand wash</li>
        <li>Wheel wells, rims & tires deep cleaned & dressed</li>
        <li>Crystal clear exterior glass</li>
        <li>Paint decontamination (iron & clay bar if required)</li>
        <li>Ceramic or advanced sealant protection</li>
        <li>Finish inspection for water spots & bonded contaminants</li>
      </ul>
      <div className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
        Traditional tunnel washes rely on harsh chemicals & abrasion that
        accelerate paint damage. Our process preserves clear coat & sets a
        foundation for long-term gloss.
      </div>
    </SectionWrapper>
  );
}

function Interior() {
  return (
    <SectionWrapper
      id="interior"
      title="Lavish Interior Auto Detail"
      subtitle="Healthier, spotless cabin: deep extraction, sanitization & conditioned surfaces."
    >
      <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
        <li>Carpet & upholstery shampoo + spot treatment</li>
        <li>Pet hair / sand removal (as needed)</li>
        <li>Leather clean & condition (if applicable)</li>
        <li>Interior glass cleaned & protected</li>
        <li>Plastic, rubber & vinyl surfaces detailed</li>
        <li>Ceramic / advanced interior protectants applied selectively</li>
      </ul>
      <div className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
        We aim for an allergen-reduced, fresh environment—not just a surface
        wipe. Extraction & protection extend textile life & resist future
        staining.
      </div>
    </SectionWrapper>
  );
}

function Complete() {
  return (
    <SectionWrapper
      id="complete"
      title="Showroom Combo Detail"
      subtitle="Full interior + exterior transformation returning pride & value. ≈3 hours typical."
    >
      <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
        Includes everything in Exterior & Interior plus refinement touches
        designed to elevate total presentation. Ideal for sale prep,
        post-road-trip renewal or seasonal reset.
      </p>
      <ul className="mt-4 space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
        <li>Hand wash / decon / wheel + tire dressing</li>
        <li>Interior deep clean & extraction</li>
        <li>Headlight & taillight clarity inspection</li>
        <li>Protection layers for paint & key interior surfaces</li>
        <li>Final gloss & touch-up pass</li>
      </ul>
      <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
        Goal: Leave you with a vehicle that feels newly purchased and
        pride-inducing to drive.
      </p>
    </SectionWrapper>
  );
}

function Special() {
  return (
    <SectionWrapper
      id="special"
      title="Special Treatments"
      subtitle="Targeted upgrades & restorative processes."
    >
      <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
        <li>Carpet & Upholstery Shampoo (per seat)</li>
        <li>Spot / Stain Treatment (conditional)</li>
        <li>Pet Hair / Sand Removal (conditional)</li>
        <li>Leather Cleaning & Conditioning (per seat)</li>
        <li>Glass Protection & Hydrophobic Water Repellent</li>
        <li>Carpet / Upholstery Protection (quote)</li>
        <li>Buffing / Waxing</li>
        <li>Ceramic Coating</li>
        <li>Paint Correction Foundation Prep</li>
      </ul>
      <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
        We'll build a custom plan after a fast condition assessment. Target
        problem areas early to prevent irreversible wear.
      </p>
    </SectionWrapper>
  );
}

function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: "Smooth Sail Auto Detail",
      telephone: "+1-661-421-8658",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4512 Barry St",
        addressLocality: "Kern County",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: "Kern County CA",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Exterior Auto Detail" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Interior Auto Detail" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Complete Auto Detail" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Special Treatments" },
        },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
