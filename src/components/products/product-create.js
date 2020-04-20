import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));

export default function ProductCreate()
{
    const classes = useStyles();
        return( 
        <div className={classes.root}>
            <div>
            <form
              onSubmit={e =>{
                e.preventDefault();
                this.props.store.add({
                     name: this.nameInput.value,
                     details: this.detailsInput.value,
                        });
                e.target.reset();
                this.nameInput.focus();
                }}>
              <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Detail"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button variant="contained" color="primary">
                Save
              </Button>
              </form>
            </div>
        </div>
        )
 
}