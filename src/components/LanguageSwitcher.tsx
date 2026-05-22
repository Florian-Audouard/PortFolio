import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGUAGES } from "../i18n/config";

// A single dropdown that lists every language declared in `config.ts`.
// The trigger shows the current language; clicking it opens a scrollable
// panel, so the control stays compact even with many languages.
//
// The panel is rendered in a portal on document.body so it isn't clipped by
// the nav's `overflow-hidden`; its position is computed from the trigger.
const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({ top: 0, right: 0 });

  const current =
    LANGUAGES.find((item) => item.code === language) ?? LANGUAGES[0];

  // Position the panel just under the trigger, right edges aligned.
  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
    });
  };

  useLayoutEffect(() => {
    if (open) updatePosition();
  }, [open]);

  // Close on outside click or Escape; keep aligned on scroll/resize.
  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !panelRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open]);

  return (
    <div className="inline-block text-left">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={current.label}
        title={current.label}
        className="flex cursor-pointer items-center gap-[8px] rounded-[6px] border border-accent bg-[rgba(10,10,75,0.75)] px-[12px] py-[6px] text-[18px] leading-none transition-all duration-300 hover:shadow-[0_0_10px_var(--color-accent)]"
      >
        <span className="text-[22px]">{current.flag}</span>
        <span className="text-[16px]">{current.label}</span>
        <span
          className={`text-[12px] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {open &&
        createPortal(
          <ul
            ref={panelRef}
            role="listbox"
            style={{ top: position.top, right: position.right }}
            className="fixed z-[1000] max-h-[60vh] min-w-[160px] overflow-y-auto rounded-[8px] border border-accent bg-[rgb(5,5,43)] py-[4px] shadow-[0_0_15px_var(--color-accent)]"
          >
            {LANGUAGES.map(({ code, label, flag }) => (
              <li key={code} role="option" aria-selected={language === code}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(code);
                    setOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center gap-[10px] whitespace-nowrap px-[14px] py-[8px] text-left text-[16px] leading-none transition-colors duration-200 hover:bg-[rgba(10,10,100,0.9)] ${
                    language === code ? "text-accent" : ""
                  }`}
                >
                  <span className="text-[22px]">{flag}</span>
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>,
          document.body
        )}
    </div>
  );
};

export default LanguageSwitcher;
