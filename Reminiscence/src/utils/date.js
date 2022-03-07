const localeOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const toLocaleString = (date, locale = 'en-US') => {
  return new Date(date).toLocaleDateString(locale, localeOptions);
};

export {toLocaleString};
