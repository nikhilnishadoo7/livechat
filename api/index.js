const express = require("express");

const app = express();

app.get('/test',(req,res)=>{
    res.json('server is live');
});


app.listen(3001);