// module

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

const BASE_URL = process.env.API_URL || 'http://localhost:3000';

export const get = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}${path}`, { ...options, method: 'GET' });
  if (!res.ok) throw new Error(`GET ${path} failed: ${res.status}`);
  return res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const withAuth = (options = {}) => ({
  ...options,
  headers: {
    ...options.headers,
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const buildQueryString = (params) =>
  '?' + Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};

export const post = async (path, body, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    ...options, method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options.headers },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed: ${res.status}`);
  return res.json();
};
