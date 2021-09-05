import axios, { AxiosRequestConfig } from "axios";

export let Config: AxiosRequestConfig = {
  baseURL: 'https://6133cca87859e700176a37b0.mockapi.io/api/v1'
};

const Api = axios.create(Config);

export { Api };
