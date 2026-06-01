import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageProvider";

export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher" role="group" aria-label="Language switcher">
      <button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
      >
        EN
      </button>
      <button
        className={language === "my" ? "active" : ""}
        onClick={() => setLanguage("my")}
      >
        မြန်မာ
      </button>
    </div>
  );
}
