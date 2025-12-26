const baseUrl = import.meta.env.VITE_API_BASE_URL;

const getUsers = async (limit = 5, skip = 0, search = "") => {
  const usersApi = search
    ? `${baseUrl}/users/search?q=${search}&limit=${limit}&skip=${skip}`
    : `${baseUrl}/users?limit=${limit}&skip=${skip}&select=id,firstName,email,gender`;

  const res = await fetch(usersApi);
  const data = await res.json();
  return data.users;
};

export { getUsers };
