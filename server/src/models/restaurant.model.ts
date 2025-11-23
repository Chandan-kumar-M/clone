
import { Schema, model, Document } from 'mongoose';

export interface IRestaurant extends Document {
  name: string;
  address: string;
  cuisine: string;
  imageUrl: string;
  averageRating?: number;
}

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  imageUrl: { type: String, required: true },
  averageRating: { type: Number, default: 0 },
});

export default model<IRestaurant>('Restaurant', restaurantSchema);
