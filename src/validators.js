// auto-generated module

export const isNonEmpty = (v) => v !== null && v !== undefined && String(v).trim().length > 0;

export const isNonEmpty = (v) => v !== null && v !== undefined && String(v).trim().length > 0;

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const isNonEmpty = (v) => v !== null && v !== undefined && String(v).trim().length > 0;

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const inRange = (v, min, max) => typeof v === 'number' && v >= min && v <= max;

export const isAlphanumeric = (v) => /^[a-zA-Z0-9]+$/.test(v);

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const isNonEmpty = (v) => v !== null && v !== undefined && String(v).trim().length > 0;

export const isAlphanumeric = (v) => /^[a-zA-Z0-9]+$/.test(v);

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const inRange = (v, min, max) => typeof v === 'number' && v >= min && v <= max;

export const inRange = (v, min, max) => typeof v === 'number' && v >= min && v <= max;

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const isAlphanumeric = (v) => /^[a-zA-Z0-9]+$/.test(v);

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const inRange = (v, min, max) => typeof v === 'number' && v >= min && v <= max;

export const isAlphanumeric = (v) => /^[a-zA-Z0-9]+$/.test(v);

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const isAlphanumeric = (v) => /^[a-zA-Z0-9]+$/.test(v);

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const inRange = (v, min, max) => typeof v === 'number' && v >= min && v <= max;

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const isPositive = (v) => typeof v === 'number' && v > 0;

export const isNonEmpty = (v) => v !== null && v !== undefined && String(v).trim().length > 0;

export const isPositive = (v) => typeof v === 'number' && v > 0;

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const isUUID = (v) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const maxLength = (v, n) => typeof v === 'string' && v.length <= n;

export const isUrl = (v) => { try { new URL(v); return true; } catch { return false; } };

export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const hasKeys = (obj, keys) => keys.every(k => Object.prototype.hasOwnProperty.call(obj, k));

export const isInteger = (v) => Number.isInteger(v);

export const isPositive = (v) => typeof v === 'number' && v > 0;
