import { RestaurantService } from './restaurantService';
import { UserService } from './userService';

const restaurantService = new RestaurantService();
const userService = new UserService();

export { restaurantService, userService };
