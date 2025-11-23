
import { Router } from 'express';
import * as restaurantController from '../controllers/restaurant.controller';

const router = Router();

router.get('/', restaurantController.getAllRestaurants);
router.get('/search', restaurantController.searchRestaurants);
router.get('/:id', restaurantController.getRestaurantById);

export default router;
