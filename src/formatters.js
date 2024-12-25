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
