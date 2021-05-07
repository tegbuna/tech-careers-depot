//Require modules
const express = require('express');
const Career = require('./models/career');
const careersRouter = require('./routes/careers');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT||3000


// Set up express app 
const app = express();
require('dotenv').config();
//Set up DB **- connecting to mongoose (8)
require('./config/database');

//Configure the view engine with app.set()
app.set('view engine', 'ejs')

//Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


app.get('/', async (req, res) => {
    const careers = await Career.find() 
    res.render('careers/index', { careers: careers });
})

// Mount routes with app.use()
app.use('/careers', careersRouter);



// Tell app to listen 
app.listen(port, function () {
    console.log(`Express is listening on port ${port}.`);
})



