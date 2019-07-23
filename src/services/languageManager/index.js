import en from "./locales/en";

let _locale;
let _currentLangName = "en";
let _defaultLocale = en.translations;
let _langs = [en];

export function setAppLang(langName) {
  const l = _langs.find(item => item.name === langName);
  if (l) {
    _locale = l.translations;
    _currentLangName = langName;
  } else {
    _locale = en.translations;
    _currentLangName = "en";
  }
}
export function t(key) {
  return _locale
    ? _locale[key]
      ? _locale[key]
      : _defaultLocale[key]
      ? _defaultLocale[key]
      : key
    : key;
}

export const currentLangName = _currentLangName;
export const langs = _langs;
