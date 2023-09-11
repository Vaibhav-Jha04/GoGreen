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
