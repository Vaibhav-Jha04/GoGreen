// auto-generated module

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};
