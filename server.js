const express = require ('express');
const mongoose= require ("mongoose");
const bodyParser = require ('body-parser');
//DB Config
const {mongoURI}= require ('./config/keys');

const items =require('./routes/api/items');

//initialize app
const app =express();

//body parser middleware
app.use(bodyParser.json());


//connect to Mongo
mongoose
 .connect(mongoURI)
 .then(  () => console.log('MongoDb Connected...'))
 .catch(err =>console.log(err.message));

 //use Routes
 app.use('/api/items',items);

 const port= process.env.PORT || 5000;

 app.listen(port, () => console.log(`Server started on port ${port}`));
 