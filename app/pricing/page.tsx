(function () {});
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing | Smooth Sail Auto Detail Simple Kern County Detailing Prices",
  description:
    "Straightforward Kern County auto detailing pricing: interior, exterior & complete showroom detail. Simple tiers for compact cars through XL SUVs.",
};

type Tier = {
  label: string;
  interior: number;
  exterior: number;
  complete: number;
};

const tiers: Tier[] = [
  { label: "Compact & Sports", interior: 165, exterior: 70, complete: 220 },
  { label: "Sedan", interior: 200, exterior: 85, complete: 255 },
  {
    label: "Small Trucks / Mid SUVs / Jeeps",
    interior: 235,
    exterior: 100,
    complete: 330,
  },
  {
    label: "Mini Vans / Big Trucks",
    interior: 270,
    exterior: 130,
    complete: 390,
  },
  { label: "Full SUVs / XL Vans", interior: 300, exterior: 165, complete: 420 },
];

export default function PricingPage() {
  return (
    <div className="py-8">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Simplest Auto Detailing Prices in California
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          No confusing packages. You choose interior, exterior or complete
          detail. We execute a top-tier process every single time. Call for
          exact quote & any special treatments.
        </p>
      </header>
      <PricingTable />
      <Callout />
      <FAQSchema />
    </div>
  );
}

function PricingTable() {
  return (
    <section aria-labelledby="pricing-heading" className="mt-12">
      <h2
        id="pricing-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        Prices
      </h2>
      <div className="mt-8 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-700">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <tr>
              <th className="px-4 py-3">Vehicle Class</th>
              <th className="px-4 py-3">Interior ($)</th>
              <th className="px-4 py-3">Exterior ($)</th>
              <th className="px-4 py-3">Complete ($)</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((t, i) => (
              <tr
                key={t.label}
                className={
                  i % 2
                    ? "bg-white dark:bg-zinc-900"
                    : "bg-zinc-100/60 dark:bg-zinc-800/60"
                }
              >
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {t.label}
                </th>
                <td className="px-4 py-3">{t.interior}</td>
                <td className="px-4 py-3">{t.exterior}</td>
                <td className="px-4 py-3">{t.complete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Callout() {
  return (
    <section
      className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-600 to-sky-600 px-8 py-10 text-white"
      aria-labelledby="callout-heading"
    >
      <h2 id="callout-heading" className="text-xl font-bold tracking-tight">
        Prefer Talking to a Real Person?
      </h2>
      <p className="mt-2 text-sm max-w-lg">
        Pricing questions? Special treatment needs? Just call. Answering pricing
        is literally what we do. Expect clarity & honest recommendations.
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
          className="rounded-full bg-cyan-800/40 px-6 py-3 text-center text-sm font-semibold backdrop-blur transition hover:bg-cyan-800/50"
        >
          Email Us
        </a>
      </div>
      <address className="mt-4 not-italic text-xs text-cyan-100">
        qwiksaildetail@gmail.com · 4512 Barry St · Kern County CA
      </address>
    </section>
  );
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are detailing prices determined?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on vehicle size, condition & selected scope: interior, exterior or complete. Special treatments are additional after quick assessment.",
        },
      },
      {
        "@type": "Question",
        name: "Do you upsell packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We simplified to 3 core options delivering a consistent premium process. Add-ons only if you request or they benefit longevity.",
        },
      },
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
