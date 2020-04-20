import { observable, runInAction, decorate } from 'mobx';
import ProductService from '../stores/ProductService';

class ProductStore{
    constructor(){
        this.productService = new ProductService();
    }
    productData = []
    status = "initial";

    getProductAsync = async () => {
        try{
            const data = await this.productService.get()
            runInAction(()=>{
                this.productData = data.rows
                console.log(this.productData.rows)
            })
        }
        catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    findProductAsync = async (id) => {
        try{
            const data = await this.productService.fetch(id) 
            runInAction(()=>{
                this.productData = data.rows[0]
                console.log(this.productData)
            })
        }
        catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }

    createProductAsync = async (model) => {
        try {
            const response = await this.productService.post(model);
            if (response.status === 201) {
                runInAction(() => {
                    this.status = "success";
                })
               
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }

    }

    updateProductAsync = async (model, id) => {
        try {
            const response = await this.productService.put(model, id)
            if (response.status === 200) {
                runInAction(() => {
                    this.status = "success";
                })
            } 
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    }
}

decorate(ProductStore, {
    productData: observable,
    status: observable
});

export default new ProductStore();