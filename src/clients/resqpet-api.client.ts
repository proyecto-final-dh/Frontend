import axios from 'axios';
import { kc } from '../config';

export const resqpetAPI = () => {
  const token = kc.token;
  let headers = {};
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  return axios.create({
    baseURL: process.env.REACT_APP_RESQPET_URL,
    headers,
  });
};
