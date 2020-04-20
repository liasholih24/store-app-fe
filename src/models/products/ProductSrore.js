import { types } from 'mobx-state-tree';
import { Product } from "Product";

const ProductStore = types.model('Product', {
    Product: types.array(Product)
}).actions(self => ({
    add(product){
        self.Product.push(product)
    }
}))

export default ProductStore;