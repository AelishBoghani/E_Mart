const express = require('express');
const app = express();
const db=require("./db")
const Pizza=require('./models/productModel')
const path=require('path')

app.use(express.json());

const pizzasRoute= require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
const ordersRoute=require('./routes/ordersRoute')


app.use('/api/products/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)

if(process.env.NODE_ENV ==='production'){

  app.use('/', express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/build/index.html'))
  })
}
 
const port= process.env.PORT || 5000;
app.listen(port, ()=> 'server running on port') 