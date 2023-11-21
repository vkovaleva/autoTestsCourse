import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class AxiosRequestBuilder<T> {
  private config: AxiosRequestConfig;

  constructor() {
    this.config = {};
  }

  url(url: AxiosRequestConfig['url']): this {
    this.config.url = url;
    return this;
  }

  baseUrl(baseURL: AxiosRequestConfig['baseURL']): this {
    this.config.baseURL = baseURL;
    return this;
  }

  method(method: AxiosRequestConfig['method']): this {
    this.config.method = method;
    return this;
  }

  data(data: T): this {
    this.config.data = data;
    return this;
  }

  params(params: AxiosRequestConfig['params']): this {
    this.config.params = params;
    return this;
  }

  headers(headers: AxiosRequestConfig['headers']): this {
    this.config.headers = headers;
    return this;
  }

  build(): AxiosRequestConfig {
    return this.config;
  }

  async execute(): Promise<AxiosResponse<T>> {
    return axios(this.build());
  }
}
