const express = require('express');
// const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

const userRoutes = require('./router/userroutes')
app.use(userRoutes)
app.listen(3000,()=>{
    console.log('no error');
  })
  