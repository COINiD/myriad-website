import i18next from "i18next"

i18next.init({
  fallbackLng: "en",
  resources: {
    en: {
      translations: require("../locales/en.json"),
    },
    eo: {
      translations: require("../locales/eo.json"),
    },
    sv: {
      translations: require("../locales/sv.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
})

i18next.languages = ["en", "eo", "sv"]

export default i18next
