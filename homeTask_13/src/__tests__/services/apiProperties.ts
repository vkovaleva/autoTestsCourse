export const baseURL = 'https://fakerestapi.azurewebsites.net/';
export const headers = { 'Content-Type': 'application/json', Accept: 'text/plain' };

export const userID = '5';

export interface Body {
  id: number;
  userName: string;
  password: string;
}
