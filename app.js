const express=require('express');
const bodyParser=require('body-parser');

const home=require('./routes/home');
const login=require('./routes/login');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login',login);
app.use(home);

app.listen(4000);