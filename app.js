const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Hallo World!');
});

app.listen(9000, ()=>{
    console.log('App run on Port 9000');
});