const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Hallo World! OK!!!');
});

app.listen(4500, ()=>{
    console.log('App run on Port 4500');
});