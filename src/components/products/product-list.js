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



class ProductList extends React.Component {

  render(){
    this.props.ProductStore.getProductAsync(); 
    return (
      <div>
      <Button style={{ marginBottom: 10 }} variant="contained" color="primary" href="/product/create">Add Product</Button> 
       <TableContainer component={Paper}>
         <Table aria-label="simple table">
           <TableHead>
             <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Detail</TableCell>
               <TableCell align="right">Action</TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
           {this.props.ProductStore.productData.map(row => (
               <TableRow key={row.id}>
                 <TableCell component="th" scope="row">
                   {row.no_product}
                 </TableCell>
                 <TableCell >{row.nama_product}</TableCell>
                 <TableCell align="right">
                  <Button href={`/productedit/${row.id}`} variant="outlined" size="small" color="primary">
                      Edit
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
