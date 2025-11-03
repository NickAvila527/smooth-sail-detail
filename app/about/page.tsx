(function () {});
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Smooth Sail Auto Detail Kern County Testimonials & FAQ",
  description:
    "Learn about Smooth Sail Auto Detail: customer testimonials, philosophy & frequently asked questions about professional detailing.",
};

const testimonials = [
  {
    quote:
      "My car hasn’t been cleaned for about 3 years and after this service my car looked brand new. It felt so good driving it.",
    author: "Robert Cochran",
  },
  {
    quote:
      "Nick was fast and efficient... made the car sparkle! Super friendly & left me with a pristine whip.",
    author: "Peter Lozano",
  },
  {
    quote:
      "Nick did an amazing job detailing my car at a good price. Wouldn't hesitate to call again. Plus he does headlights!",
    author: "Dylan Gonzalez",
  },
];

const faqs = [
  {
    q: "Why should I get my car detailed regularly?",
    a: "Regular detailing maintains appearance, protects surfaces & preserves resale value. 6–12 month cadence depending on usage.",
  },
  {
    q: "Do you have your own Water or Power?",
    a: "We bring hoses & extension cords; we currently borrow water & power on-site.",
  },
  {
    q: "What's the difference between a car wash and auto detailing?",
    a: "Car wash = quick surface clean. Detailing = deep cleaning, restoration & protection of interior & exterior.",
  },
  {
    q: "Can you remove scratches & swirl marks?",
    a: "Yes, via multi-step paint correction when appropriate for clear coat thickness.",
  },
  {
    q: "What is a clay bar treatment?",
    a: "Process removing embedded contaminants from paint after wash so surfaces are smooth & receptive to protection.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          About
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          We're proud of the satisfaction we bring to customers across Kern
          County. Read real experiences & find answers to common detailing
          questions.
        </p>
      </header>
      <Testimonials />
      <FAQ />
      <AboutSchema />
    </div>
  );
}

function Testimonials() {
  return (
    <section className="mt-12" aria-labelledby="testimonials-heading">
      <h2
        id="testimonials-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        Testimonials & Reviews
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-900"
          >
            <blockquote className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-zinc-800 dark:text-zinc-200">
              — {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="mt-16" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white"
      >
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-6">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
          >
            <h3 className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
              {f.q}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
