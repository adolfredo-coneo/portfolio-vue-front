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

class ContactInput {
  name!: string;
  email!: string;
  messageType!: string;
  message!: string;
  company!: string;
}

export default {
  getProjects(): Promise<AxiosResponse> {
    return apiClient.get("/projects");
  },
  getProject(id: string): Promise<AxiosResponse> {
    return apiClient.get("/projects/" + id);
  },
  sendContact(contact: ContactInput): Promise<AxiosResponse> {
    return apiClient.post("/contacts/", contact);
  },
  getArticles(): Promise<AxiosResponse> {
    return apiClient.get("/articles");
  },
  getArticle(id: string): Promise<AxiosResponse> {
    return apiClient.get("/articles/" + id);
  },
};
