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
