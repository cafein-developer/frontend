import axios from 'axios';

const AuthAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY,
  },
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 304;
  },
});

export const getCafeLists = () => {
  return AuthAPI.get('/cafe');
}

