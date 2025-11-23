
import { Request, Response } from 'express';
import Restaurant from '../models/restaurant.model';

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const searchRestaurants = async (req: Request, res: Response) => {
  const { name } = req.query;

  try {
    const restaurants = await Restaurant.find({ name: { $regex: name, $options: 'i' } });
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
