"use client";

import Image from 'next/image';
import { FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { whitepaperContent } from '../content/whitepaper';
import LanguageSwitcher from '../components/LanguageSwitcher';

const APP_URL = 'https://www.dawidfaith.com';
const INSTAGRAM_URL = 'https://www.instagram.com/dawidfaith';

function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 py-10 sm:py-14">
      <h2 className="mb-5 text-2xl font-bold text-zinc-900 sm:text-3xl">{heading}</h2>
      <div className="space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export default function WhitepaperPage() {
  const { language } = useLanguage();
  const c = whitepaperContent[language];

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-[#fbfaf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <Image src="/d-faith-logo.png" alt="D.FAITH" width={28} height={28} className="rounded-full" />
            <span className="font-bold tracking-tight">D.FAITH</span>
          </a>
          <LanguageSwitcher />
        </div>
        <nav className="mx-auto hidden max-w-3xl gap-6 px-4 pb-3 text-sm text-zinc-500 sm:flex sm:px-6">
          <a href="#problem" className="hover:text-zinc-900">{c.nav.problem}</a>
          <a href="#solution" className="hover:text-zinc-900">{c.nav.solution}</a>
          <a href="#token" className="hover:text-zinc-900">{c.nav.token}</a>
          <a href="#roadmap" className="hover:text-zinc-900">{c.nav.roadmap}</a>
          <a href="#team" className="hover:text-zinc-900">{c.nav.team}</a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Hero */}
        <div className="border-b border-zinc-200 py-12 sm:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-600">
            {c.hero.kicker}
          </p>
          <h1 className="mb-4 text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl">
            {c.hero.title}
          </h1>
          <p className="mb-6 max-w-xl text-lg text-zinc-600 sm:text-xl">{c.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={APP_URL}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {c.hero.ctaPrimary}
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href={INSTAGRAM_URL}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900"
            >
              <FaInstagram />
              {c.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-400">{c.hero.version}</p>
        </div>

        {/* Summary */}
        <div className="border-b border-zinc-200 py-10 sm:py-12">
          <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-zinc-500">
            {c.summary.heading}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-zinc-800">
            {c.summary.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        {/* Problem */}
        <Section id="problem" heading={c.problem.heading}>
          <p>{c.problem.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.problem.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="font-semibold text-zinc-900">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="italic text-zinc-500">{c.problem.cycle}</p>
        </Section>

        {/* Solution */}
        <Section id="solution" heading={c.solution.heading}>
          <p>{c.solution.intro}</p>
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 font-medium text-zinc-800">
            {c.solution.principle}
          </p>
        </Section>

        {/* Steps */}
        <Section id="how-it-works" heading={c.steps.heading}>
          <ol className="space-y-4">
            {c.steps.items.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-zinc-900">{step.title}</p>
                  <p className="text-sm text-zinc-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Token */}
        <Section id="token" heading={c.token.heading}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                {c.token.chainLabel}
              </p>
              <p className="text-lg font-bold text-zinc-900">{c.token.chain}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                {c.token.typeLabel}
              </p>
              <p className="text-lg font-bold text-zinc-900">{c.token.type}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">{c.token.typeNote}</p>

          <p className="pt-2 font-semibold text-zinc-900">{c.token.usesHeading}</p>
          <ul className="list-disc space-y-2 pl-5">
            {c.token.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>

          <p className="pt-4 font-semibold text-zinc-900">{c.token.tokenomicsHeading}</p>
          <p className="text-sm text-zinc-500">{c.token.tokenomicsNote}</p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {c.token.tokenomicsRows.map((row) => (
                  <tr key={row.label} className="border-b border-zinc-100 last:border-0">
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">{row.label}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-bold text-amber-600">{row.share}</td>
                    <td className="px-4 py-3 text-zinc-600">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-500">{c.token.noSecondToken}</p>
        </Section>

        {/* Reputation */}
        <Section id="reputation" heading={c.reputation.heading}>
          <p>{c.reputation.intro}</p>
          <ul className="list-disc space-y-2 pl-5">
            {c.reputation.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Section>

        {/* Shop */}
        <Section id="shop" heading={c.shop.heading}>
          <div className="grid gap-4 sm:grid-cols-3">
            {c.shop.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-4">
                <p className="font-semibold text-zinc-900">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech */}
        <Section id="tech" heading={c.tech.heading}>
          <ul className="space-y-3">
            {c.tech.bullets.map((b) => (
              <li key={b.title}>
                <span className="font-semibold text-zinc-900">{b.title}: </span>
                <span className="text-zinc-600">{b.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Roadmap */}
        <Section id="roadmap" heading={c.roadmap.heading}>
          <div className="space-y-4">
            {c.roadmap.phases.map((phase) => (
              <div key={phase.title} className="rounded-xl border border-zinc-200 bg-white p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-zinc-900">{phase.title}</p>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                    {phase.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-600">{phase.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Team */}
        <Section id="team" heading={c.team.heading}>
          <div className="flex items-center gap-4">
            <Image
              src="/dawid-faith-photo.jpg"
              alt={c.team.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-zinc-900">{c.team.name}</p>
              <p className="text-sm text-zinc-600">{c.team.bio}</p>
            </div>
          </div>
        </Section>

        {/* Risk */}
        <Section id="risk" heading={c.risk.heading}>
          <p className="text-sm text-zinc-500">{c.risk.text}</p>
        </Section>

        {/* Conclusion */}
        <Section id="conclusion" heading={c.conclusion.heading}>
          <p>{c.conclusion.text}</p>
        </Section>
      </main>

      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 text-center sm:px-6">
          <div className="flex items-center gap-2">
            <Image src="/d-faith-logo.png" alt="D.FAITH" width={24} height={24} className="rounded-full" />
            <span className="font-bold">D.FAITH</span>
          </div>
          <p className="text-sm text-zinc-500">{c.footer.tagline}</p>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <a href="mailto:dawid.faith@gmail.com" className="hover:text-zinc-900">
              {c.footer.contact}
            </a>
            <a href={INSTAGRAM_URL} className="hover:text-zinc-900">
              <FaInstagram />
            </a>
          </div>
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} {c.footer.rights}
          </p>
          <p className="max-w-md text-xs text-zinc-400">{c.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
