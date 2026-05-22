// Single source of truth for the languages the site supports.
//
// To add a language:
//   1. Add an entry to `LANGUAGES` below (code + label + flag emoji).
//   2. Add a matching translation block in `translations.ts`
//      (TypeScript will error until you do — the `Language` type is derived
//      from this list, so `translations` must cover every code).
// Nothing else needs to change: the switcher and the context adapt automatically.

export interface LanguageMeta {
  /** Short locale code, also used as the localStorage value and <html lang>. */
  code: string;
  /** Name shown to users (accessible label / tooltip). */
  label: string;
  /** Flag emoji rendered in the switcher. */
  flag: string;
}

export const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
] as const satisfies readonly LanguageMeta[];

/** Union of supported language codes, e.g. "fr" | "en". Derived from LANGUAGES. */
export type Language = (typeof LANGUAGES)[number]["code"];

/** Language used when nothing is stored and the browser language is unsupported. */
export const DEFAULT_LANGUAGE: Language = "fr";

const SUPPORTED_CODES = LANGUAGES.map((language) => language.code);

/** Type guard: is this arbitrary string one of our supported codes? */
export const isLanguage = (value: string | null): value is Language =>
  value !== null && SUPPORTED_CODES.includes(value as Language);
