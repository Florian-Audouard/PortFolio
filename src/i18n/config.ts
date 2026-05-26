// Single source of truth for the languages the site supports.
//
// To add a language:
//   1. Add an entry to `LANGUAGES` below (code + label + flagCode).
//   2. Create `translations/<code>.ts` and wire it into `translations.ts`
//      (TypeScript will error until you do — the `Language` type is derived
//      from this list, so `translations` must cover every code).
// Nothing else needs to change: the switcher and the context adapt automatically.

export interface LanguageMeta {
  /** Short locale code, also used as the localStorage value and <html lang>. */
  code: string;
  /** Name shown to users (accessible label / tooltip). */
  label: string;
  /** ISO 3166-1 alpha-2 code used to render the flag image. */
  flagCode: string;
}

export const LANGUAGES = [
  { code: "fr", label: "Français", flagCode: "fr" },
  { code: "en", label: "English", flagCode: "gb" },
  { code: "de", label: "Deutsch", flagCode: "de" },
  { code: "es", label: "Español", flagCode: "es" },
  { code: "it", label: "Italiano", flagCode: "it" },
  { code: "pt", label: "Português", flagCode: "pt" },
  { code: "ru", label: "Русский", flagCode: "ru" },
  { code: "zh", label: "中文", flagCode: "cn" },
  { code: "ja", label: "日本語", flagCode: "jp" },
  { code: "ko", label: "한국어", flagCode: "kr" },
] as const satisfies readonly LanguageMeta[];

/** Union of supported language codes, e.g. "fr" | "en". Derived from LANGUAGES. */
export type Language = (typeof LANGUAGES)[number]["code"];

/** Language used when nothing is stored and the browser language is unsupported. */
export const DEFAULT_LANGUAGE: Language = "fr";

const SUPPORTED_CODES = LANGUAGES.map((language) => language.code);

/** Type guard: is this arbitrary string one of our supported codes? */
export const isLanguage = (value: string | null): value is Language =>
  value !== null && SUPPORTED_CODES.includes(value as Language);
