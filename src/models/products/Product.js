import { types } from 'mobx-state-tree';


const Product = types.model('Product', {
    name: types.string,
    details: types.string,
 });
 export default Product;