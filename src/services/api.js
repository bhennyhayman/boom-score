import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

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

