import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/[0.04] p-1">
      {locales.map((code) => {
        const isActive = code === locale;

        return (
          <Link
            key={code}
            href={`/${code}`}
            className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] transition sm:text-xs ${
              isActive
                ? "bg-cyan-300 text-slate-900"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
            aria-current={isActive ? "page" : undefined}
            aria-label={localeLabels[code]}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
