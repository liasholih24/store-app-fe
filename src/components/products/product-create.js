import React from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ProductCreate extends React.Component {  
  CreateProduct = (e) => {
    e.preventDefault();

    this.props.ProductStore.createProductAsync({
        no_product: this.noproduct.value,
        nama_product: this.namaproduct.value,
    });

    this.props.history.go(-1)
};
  render(){
    return( 
      <div>
          <div>
          <form
            onSubmit={this.CreateProduct}>
            <TextField
              id="standard-full-width"
              inputRef={input => (this.noproduct = input)}
              className="input"
              type="text"
              label="Nomor Product"
              style={{ margin: 8 }}
              placeholder="Nomor Product"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-full-width"
              ref="nama_product"
              inputRef={input => (this.namaproduct = input)}
              className="input"
              type="text"
              style={{ margin: 8 }}
              placeholder="Nama Product"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            </form>
          </div>
      </div>
      )
  } 
}
export default inject("ProductStore")(observer(ProductCreate));