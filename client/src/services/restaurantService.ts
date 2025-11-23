
import API from './api';

export const getAllRestaurants = async () => {
  const { data } = await API.get('/restaurants');
  return data;
};

export const getRestaurantById = async (id: string) => {
  const { data } = await API.get(`/restaurants/${id}`);
  return data;
};

export const searchRestaurants = async (name: string) => {
  const { data } = await API.get(`/restaurants/search?name=${name}`);
  return data;
};
