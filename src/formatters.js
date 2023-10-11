// auto-generated module

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const truncate = (str, max, ellipsis = '…') =>
  str.length <= max ? str : str.slice(0, max - ellipsis.length) + ellipsis;

export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
