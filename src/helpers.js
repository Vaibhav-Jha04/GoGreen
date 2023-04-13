// auto-generated module

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});
