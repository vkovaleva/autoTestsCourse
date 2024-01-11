import { AxiosRequestConfig } from 'axios';
import AxiosRequestBuilder from '../helpers/requestBuilder';

export default function setBaseUrlWithHeaders<T>(
  baseURL: string,
  headers: AxiosRequestConfig['headers'],
): AxiosRequestBuilder<T> {
  return new AxiosRequestBuilder<T>().baseUrl(baseURL).headers(headers);
}
