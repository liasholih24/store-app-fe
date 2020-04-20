import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';

class ProductUpdate extends React.Component {  

  
  componentDidMount() {
    this.props.ProductStore.findProductAsync(this.props.match.params.id); 
     
  }

  UpdateProduct = (e) => {
    e.preventDefault();
    this.props.ProductStore.updateProductAsync({
        no_product: this.noproduct.value,
        nama_product: this.namaproduct.value,
    }, this.props.ProductStore.productData.id);

    this.props.history.go(-1)
  }


  render(){
    return( 
      <div>
          <div>
          <form
            onSubmit={this.UpdateProduct}>
             <input
              id="standard-full-width"
              defaultValue={this.props.ProductStore.productData.no_product}
              ref={input => (this.noproduct = input)}
              onChange={this.handleChange}
              className="input"
              type="text"
              label="Nomor Product"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
            />
           
            <input
              id="standard-full-width"
              defaultValue={this.props.ProductStore.productData.nama_product}
              ref={input => (this.namaproduct = input)}
              onChange={this.onTodoChange}
              className="input"
              type="text"
              style={{ margin: 8 }}
              label="Nama Product"
              fullWidth
              margin="normal"
            />
            
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
            </form>
          </div>
      </div>
      )
  } 
} 
export default inject("ProductStore")(observer(ProductUpdate));