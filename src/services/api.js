import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

export const creatingUser = async(userData) => {

  try {
      const response = await api.post(`/api/register`, userData);
      return response;
  } catch (error) {
      console.error(error)
  }

}

export const logUserIn = async(data) => {
  try {
    const response = await api.post(`/api/login`, data);
    return response;
  } catch (error) {
    console.error(error.message)
  }
}

