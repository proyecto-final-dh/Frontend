import axios from 'axios';

export const resqpetAPI = (token: string) => {
  return axios.create({
    baseURL: process.env.REACT_APP_RESQPET_URL,
    headers: { Authorization: token },
  });
};
