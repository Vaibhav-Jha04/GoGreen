// module

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useCallback } from 'react';

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(s => !s), []);
  return [state, toggle];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};

import { useEffect } from 'react';

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => { if (ref.current && !ref.current.contains(e.target)) handler(e); };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, options).then(r => r.json()).then(setData).catch(setError).finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error };
};

import { useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
};
