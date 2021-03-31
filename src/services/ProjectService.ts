import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/adolfredo-coneo/portfolio-vue-server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects(): Promise<AxiosResponse> {
    return apiClient.get("/projects");
  },
  getProject(id: string): Promise<AxiosResponse> {
    return apiClient.get("/projects/" + id);
  },
};
