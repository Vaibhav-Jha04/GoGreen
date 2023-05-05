// auto-generated module

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const flatten = (arr, depth = 1) =>
  depth > 0
    ? arr.reduce((acc, v) => acc.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.slice();

export const pick = (obj, keys) =>
  Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));

export const pick = (obj, keys) =>
  Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));

export const debounce = (fn, wait) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const debounce = (fn, wait) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const flatten = (arr, depth = 1) =>
  depth > 0
    ? arr.reduce((acc, v) => acc.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
    : arr.slice();

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const debounce = (fn, wait) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const pick = (obj, keys) =>
  Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const pick = (obj, keys) =>
  Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const noop = () => {};

export const zip = (...arrays) =>
  Array.from({ length: Math.min(...arrays.map(a => a.length)) }, (_, i) => arrays.map(a => a[i]));

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const zip = (...arrays) =>
  Array.from({ length: Math.min(...arrays.map(a => a.length)) }, (_, i) => arrays.map(a => a[i]));

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const uniq = (arr) => [...new Set(arr)];

export const uniq = (arr) => [...new Set(arr)];

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const noop = () => {};

export const identity = (x) => x;

export const noop = () => {};

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const zip = (...arrays) =>
  Array.from({ length: Math.min(...arrays.map(a => a.length)) }, (_, i) => arrays.map(a => a[i]));

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const isEmpty = (val) =>
  val === null || val === undefined ||
  (typeof val === 'string' && val.trim() === '') ||
  (Array.isArray(val) && val.length === 0) ||
  (typeof val === 'object' && Object.keys(val).length === 0);

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export const noop = () => {};

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const debounce = (fn, wait) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const debounce = (fn, wait) => {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
};

export const identity = (x) => x;

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const omit = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => !keys.includes(k)));

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const toArray = (val) => (Array.isArray(val) ? val : [val]);

export const zip = (...arrays) =>
  Array.from({ length: Math.min(...arrays.map(a => a.length)) }, (_, i) => arrays.map(a => a[i]));

export const uniq = (arr) => [...new Set(arr)];

export const deepClone = (val) => {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(deepClone);
  return Object.fromEntries(Object.entries(val).map(([k, v]) => [k, deepClone(v)]));
};

export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
