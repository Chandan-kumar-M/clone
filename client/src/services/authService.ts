
import API from './api';

export const login = async (formData: any) => {
  const { data } = await API.post('/auth/login', formData);
  localStorage.setItem('token', data.token);
  return data;
};

export const signup = async (formData: any) => {
  const { data } = await API.post('/auth/signup', formData);
  localStorage.setItem('token', data.token);
  return data;
};
