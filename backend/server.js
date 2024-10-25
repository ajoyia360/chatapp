const express = require('express');
const app = express();
app.get('/',(req,res)=>{(console.log('hello world from node server'))});
app.listen(5000,()=>{console.log('listening on port 5000...')});