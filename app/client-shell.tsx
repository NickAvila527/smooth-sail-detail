"use client";
import React from "react";
import { ThemeProvider, useTheme } from "next-themes";
import Link from "next/link";

// Simple language context placeholder
export type SupportedLocale = "en" | "es";
const LanguageContext = React.createContext<{
  locale: SupportedLocale;
  setLocale: (l: SupportedLocale) => void;
}>({
  locale: "en",
  setLocale: () => {},
});

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<SupportedLocale>("en");
  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = React.useContext(LanguageContext);
  return (
    <select
      aria-label="Select language"
      className="h-9 rounded-full border border-zinc-300 bg-white px-3 text-xs font-medium dark:border-zinc-600 dark:bg-zinc-800"
      value={locale}
      onChange={(e) => setLocale(e.target.value as SupportedLocale)}
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-700"
      />
    );
  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 bg-white/90 backdrop-blur dark:border-zinc-700 dark:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight"
        >
          <span className="sr-only">Smooth Sail Auto Detail Home</span>
          <div
            className="h-8 w-8 rounded bg-gradient-to-tr from-cyan-500 to-sky-600"
            aria-hidden="true"
          />
          <span>Smooth Sail Detail</span>
        </Link>
        <nav
          aria-label="Primary"
          className="hidden gap-8 text-sm font-medium md:flex"
        >
          <Link
            href="/pricing"
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Pricing
          </Link>
          <Link
            href="/services"
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            About
          </Link>
          <Link
            href="/#contact"
            className="hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="tel:16614218658"
            className="hidden rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-500 md:inline-block"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/70 dark:border-zinc-700">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
              Contact
            </h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="tel:16614218658" className="hover:underline">
                  Phone: (661) 421-8658
                </a>
              </li>
              <li>
                <a
                  href="mailto:qwiksaildetail@gmail.com"
                  className="hover:underline"
                >
                  Email: qwiksaildetail@gmail.com
                </a>
              </li>
              <li>4512 Barry St</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
              Services
            </h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Exterior Detailing</li>
              <li>Interior Detailing</li>
              <li>Complete Showroom Detail</li>
              <li>Ceramic Coating & Protection</li>
              <li>Headlights, Tires, Clay Bar</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
              Follow & Book
            </h3>
            <p className="mt-3 text-sm">
              Schedule a call to get personalized recommendations for your
              vehicle.
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-block rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500"
            >
              Schedule
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 pt-6 text-xs text-zinc-500 dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} Smooth Sail Auto Detail. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <span aria-hidden>⚡</span> in Kern County.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 pt-8 md:px-8">{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
