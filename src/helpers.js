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

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
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

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

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

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

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

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

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

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
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

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

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

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
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

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

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

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

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

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

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

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const timeout = (promise, ms) =>
  Promise.race([promise, new Promise((_, r) => setTimeout(() => r(new Error('Timeout')), ms))]);

export const retry = async (fn, retries = 3, delay = 500) => {
  try { return await fn(); } catch (err) {
    if (retries <= 0) throw err;
    await new Promise(r => setTimeout(r, delay));
    return retry(fn, retries - 1, delay * 2);
  }
};

export const paginate = (items, page, limit) => ({
  data: items.slice((page - 1) * limit, page * limit),
  total: items.length,
  page,
  pages: Math.ceil(items.length / limit),
});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const batchProcess = async (items, fn, batchSize = 10) => {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    results.push(...await Promise.all(batch.map(fn)));
  }
  return results;
};

export const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

export const once = (fn) => {
  let called = false, result;
  return (...args) => { if (!called) { called = true; result = fn(...args); } return result; };
};

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const g = typeof key === 'function' ? key(item) : item[key];
    (acc[g] = acc[g] || []).push(item);
    return acc;
  }, {});

export const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => (inThrottle = false), limit); }
  };
};
