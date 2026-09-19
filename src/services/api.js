const BASE_URL = "https://connections-api.goit.global";
const headers = (token) => ({ Authorization: `Bearer ${token}` });

const request = async (url, options) => {
  const response = await fetch(url, options);
  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }

  if (!response.ok) {
    throw new Error(
      data?.message || data?.error || "Не вдалося виконати запит",
    );
  }

  return data;
};

export const registerUser = (data) =>
  request(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const loginUser = (data) =>
  request(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const logoutUser = (token) =>
  request(`${BASE_URL}/users/logout`, {
    method: "POST",
    headers: headers(token),
  });

export const fetchCurrentUser = (token) =>
  request(`${BASE_URL}/users/current`, {
    headers: headers(token),
  });

export const fetchContacts = (token) =>
  request(`${BASE_URL}/contacts`, {
    headers: headers(token),
  });

export const addContactsApi = (contact, token) =>
  request(`${BASE_URL}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers(token) },
    body: JSON.stringify(contact),
  });

export const deleteContactApi = (id, token) =>
  request(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
    headers: headers(token),
  });
