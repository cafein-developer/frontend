import axios from 'axios';

const AuthAPI = axios.create({
  baseURL: "https://cafein.life",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    key: "X-API-KEY",
    value: "f55c5393-a03a-4094-93b1-6708940d698d",
  },
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 304;
  },
});

// AuthAPI.interceptors.request.use(
//   async (config) => {
//     try {
//       const user: any = await new Promise((resolve, reject) => {
//         auth.onAuthStateChanged((user) => {
//           resolve(user);
//         }, reject);
//       });

//       if (user) {
//         const token = await user?.getIdToken();
//         config.headers.Authorization = `Bearer ${ token }`;
//       }
//     } catch {
//       delete config.headers.Authorization;
//     } finally {
//       return config;
//     }
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getCafeLists = () => {
  return AuthAPI.get('/cafe');
}

