import axiosInstance from "../../config/axios.config"

export default class ShowProductsService {
  getAllProducts = () => {
    return axiosInstance.get('products')
  }
}