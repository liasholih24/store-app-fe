import React from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

class ProductCreate extends React.Component {  

  constructor(props){
    super(props)
    this.state = {
      file: []
    }
  }
  handleChange(e){
    let file = e.target.files[0];
    
    let reader = new FileReader();
    reader.readAsDataURL(file)

    reader.onload = () => {
      this.setState ({
        file : reader.result
      })
    }
   }
  CreateProduct = (e) => {
    e.preventDefault();

    this.props.ProductStore.createProductAsync({
        no_product: this.noproduct.value,
        nama_product: this.namaproduct.value,
        harga_jual: this.hargajual.value,
        kata_promosi: this.katapromosi.value,
        base64: this.state.file
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

            <TextField
              id="standard-full-width"
              inputRef={input => (this.hargajual = input)}
              className="input"
              type="text"
              style={{ margin: 8 }}
              placeholder="Harga Jual"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="standard-full-width"
              inputRef={input => (this.katapromosi = input)}
              className="input"
              type="text"
              style={{ margin: 8 }}
              placeholder="Kata Promosi"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Input type="file" 
            className="input"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
              }}
            onChange={ this.handleChange.bind(this) }/>

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