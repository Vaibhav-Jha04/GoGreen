// auto-generated module

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const toKebabCase = (str) => str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const toKebabCase = (str) => str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const formatDate = (date, locale = 'en-US') =>
  new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const bytesToHuman = (bytes) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) { bytes /= 1024; i++; }
  return `${bytes.toFixed(1)} ${units[i]}`;
};

export const bytesToHuman = (bytes) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) { bytes /= 1024; i++; }
  return `${bytes.toFixed(1)} ${units[i]}`;
};

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const pluralize = (word, count, plural) =>
  count === 1 ? word : (plural || word + 's');

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const toCamelCase = (str) =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const toCamelCase = (str) =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

export const bytesToHuman = (bytes) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) { bytes /= 1024; i++; }
  return `${bytes.toFixed(1)} ${units[i]}`;
};

export const formatNumber = (n, decimals = 2) =>
  new Intl.NumberFormat('en-US', { maximumFractionDigits: decimals }).format(n);

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const toCamelCase = (str) =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

export const toCamelCase = (str) =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

export const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

export const toCamelCase = (str) =>
  str.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
