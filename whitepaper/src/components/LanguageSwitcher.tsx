"use client";

import { useLanguage, Language } from '../context/LanguageContext';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-300 bg-white/80 p-1 text-sm">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          aria-current={language === code}
          className={`rounded-full px-3 py-1 font-medium transition-colors ${
            language === code
              ? 'bg-zinc-900 text-white'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
