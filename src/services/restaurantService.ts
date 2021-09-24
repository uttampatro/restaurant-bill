import axios from './axios';
import * as config from '../config/api';

export interface IRestaurantService {
    getAllRestaurant(): Promise<any[]>;
}

export class RestaurantService implements IRestaurantService {
    async getAllRestaurant(): Promise<any> {
        try {
            const response = await axios.get(
                `${config.apiConfig.baseUrl}/v1/restaurants`
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new RestaurantService();
