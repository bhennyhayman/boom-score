import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.request.use(
  (config) => {
    if (
      config.url.includes("/login") ||
      config.url.includes("/register")
    ) {
      return config;
    }

    // Otherwise, attach token if available
    try {
      const info = localStorage.getItem("userInfo");
      if (info) {
        const { token } = JSON.parse(info);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (err) {
      console.error("Error parsing userInfo:", err);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const creatingUser = async(userData) => {

  try {
      const response = await api.post(`/api/register`, userData);
      return response.data;
  } catch (error) {
      console.error(error)
  }

}

export const logUserIn = async(userlogins) => {
  try {
    const response = await api.post(`/api/login`, userlogins);
    return response;
  } catch (error) {
    console.error(error.message)
  }
}

