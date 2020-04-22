import React from 'react';
import { observer, inject } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class ProductCard extends React.Component {
  
render(){
  this.props.ProductStore.getProductAsync(); 

  return(
    <Container component="section">
            <Grid container>
        {this.props.ProductStore.productData.map((row, index) => (
            <Card style={{ 
              minWidth: 250,
              marginTop: 30,
              marginRight: 30,
              marginBottom: 30 }}>
                <CardActionArea>
                    <CardMedia
                    image={row.base64}
                    title={row.nama_product}
                    style={{height:140}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {row.nama_product}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {row.no_product}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {row.kata_promosi}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                     IDR {row.harga_jual}
                    </Button>
                </CardActions>
            </Card>
        ))}
            </Grid>
        </Container>
  )
}

}
export default inject("ProductStore")(observer(ProductCard)); 