import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "https://api.skilla.ru/mango/",
  headers: {
    Authorization: `Bearer testtoken`,
  },
})
