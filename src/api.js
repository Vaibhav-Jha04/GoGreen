// module

export const del = async (path, options = {}) => {
  const res = await fetch(`${process.env.API_URL}${path}`, { ...options, method: 'DELETE' });
  if (!res.ok) throw new Error(`DELETE ${path} failed: ${res.status}`);
  return res.status === 204 ? null : res.json();
};
