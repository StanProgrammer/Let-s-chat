const express = require('express');
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT,()=>{
    console.log('no error');
  })
  .catch(err=>{console.log(err);})