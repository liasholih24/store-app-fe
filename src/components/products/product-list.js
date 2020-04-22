import React from 'react';
import { observer, inject } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  
  DeleteProduct = (e) => {
    e.preventDefault();
    this.props.ProductStore.deleteProductAsync(e.currentTarget.value)
  }

  render(){
    this.props.ProductStore.getProductAsync()
    return (
      <div>
      <Button style={{ marginBottom: 10 }} variant="contained" color="primary" component={Link} to="/product/create">Add Product</Button> 
       <TableContainer component={Paper}>
         <Table aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell>SKU</TableCell>
               <TableCell>Nama Produk</TableCell>
               <TableCell>Harga</TableCell>
               <TableCell>Deskripsi</TableCell>
               <TableCell align="right">Action</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
           {this.props.ProductStore.productData.map(row => (
               <TableRow key={row.id}>
                 <TableCell component="th" scope="row">
                   {row.no_product}
                 </TableCell>
                 <TableCell component="th" scope="row">
                   {row.kata_promosi}
                 </TableCell>
                 <TableCell component="th" scope="row">
                   {row.harga_jual}
                 </TableCell>
                 <TableCell >{row.nama_product}</TableCell>
                 <TableCell align="right">
                  <Button style={{marginRight:15}} component={Link} to={`/productedit/${row.id}`} variant="outlined" size="small" color="primary">
                      Edit
                  </Button>
                  <Button onClick={this.DeleteProduct} value={row.id} variant="outlined" size="small" color="danger">
                      Delete
                  </Button>
                 </TableCell>
               </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer> 
       </div> 
      );
  } 
}
export default inject("ProductStore")(observer(ProductList));
