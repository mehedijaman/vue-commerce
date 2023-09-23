import axios from "axios";

class ApiService{
    async getCategories(){
        let res = await axios.get('https://dummyjson.com/products/categories');
        return res.data;
    }

    async getProducts(){
        let res = await axios.get('https://dummyjson.com/products');
        return res.data;
    }

    async getCategoryProducts(category){
        let res = await axios.get(`https://dummyjson.com/products/${category}`);
        return res.data;
    }

    async getProduct(id){
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        return res.data;
    }

}

export default new ApiService();