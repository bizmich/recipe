import { Recipe } from "@/types/interfaces";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);

  getById = (id: string) =>
    axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);

  post = (post: Recipe) =>
    axiosInstance.post<T>(this.endpoint, post).then((res) => res.data);

  put = (id: string, post: Recipe) =>
    axiosInstance.put<T>(`${this.endpoint}/${id}`).then((res) => res.data);

  delete = (id: string) =>
    axiosInstance.delete(`${this.endpoint}/${id}`).then((res) => res.data);
}

export default APIClient;
