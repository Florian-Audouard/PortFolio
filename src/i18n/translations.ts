// Assembles every per-language block into a single `translations` record.
// Each language lives in its own file under `translations/`; the shared shape
// (`Translation`, `Project`, `EmphText`) is defined in `types.ts`.
// To add a language: create `translations/<code>.ts`, import it below, add it to
// the record, and register the code in `config.ts` (TypeScript enforces both).

import type { Language } from "./config";
import type { Translation } from "./types";

import { fr } from "./translations/fr";
import { en } from "./translations/en";
import { de } from "./translations/de";
import { pt } from "./translations/pt";
import { es } from "./translations/es";
import { it } from "./translations/it";
import { ru } from "./translations/ru";
import { zh } from "./translations/zh";
import { ja } from "./translations/ja";
import { ko } from "./translations/ko";

export type { Language, Translation };
export type { Project, EmphText } from "./types";

export const translations: Record<Language, Translation> = {
  fr,
  en,
  de,
  pt,
  es,
  it,
  ru,
  zh,
  ja,
  ko,
};
