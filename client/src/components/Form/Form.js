import React, { useState } from 'react';
import { TextField, Button, Typography, Paper  } from '@material-ui/core';

import useStyles from './styles';


const Form = () => {
   
   const [postData, setPostData] = useState({

   }); 

   const classes = useStyles(); 
   
   const handleSubmit = () =>{

   };
   return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant='h6'>Creating a Memory</Typography>
            <TextField name="author" variant='outlined' label="Author" fullWidth
            value={postData.author}
            onChange={}
            />
            </form>
        </Paper>
    );
}

export default Form;