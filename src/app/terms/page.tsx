"use client";

import { useLanguage } from "@/context/LanguageContext";
import { termsTranslations } from "@/translations/terms";

export default function TermsPage() {
  const { language } = useLanguage();
  const c = termsTranslations[language];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl md:text-4xl font-black">{c.title}</h1>
        <p className="text-sm text-muted-foreground">{c.updated}</p>
      </div>
      <p className="text-muted-foreground leading-relaxed">{c.intro}</p>
      <div className="space-y-6">
        {c.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-xl font-bold">{section.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
