export const API_URL = 'http://localhost:5000/api';

export async function api(path, method='GET', body, token) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  if (body) opts.body = JSON.stringify(body);
  if (token) opts.headers['Authorization'] = 'Bearer ' + token;
  const res = await fetch(API_URL + path, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'API error');
  return data;
}