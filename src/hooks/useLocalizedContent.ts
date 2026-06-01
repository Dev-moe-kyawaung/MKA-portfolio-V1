import { useTranslation } from "react-i18next";

export function useLocalizedContent() {
  const { t, i18n } = useTranslation();

  return {
    t,
    language: i18n.language,
    isBurmese: i18n.language === "my"
  };
}
