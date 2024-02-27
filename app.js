require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const {flash} = require('express-flash-message')
const session = require('express-session');
const connectDB = require('./server/config/db');
const app = express();
const port = 5000 || process.env.PORT;

connectDB();
app.use(express.urlencoded({extented: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(
    session({
        secret:'secret',
        resave:false,
        saveUninitialized:true,
        cookie:{
            maxAge: 1000*60*60*24*7,
        }
    })
);


app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/customer'))


//Handle 404
app.get('*', (req, res)=>{
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});