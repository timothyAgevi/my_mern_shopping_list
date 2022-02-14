const dotenv= require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 4200;
const NODE_ENV = process.env.NODE_ENV;
const SECRET_KEY = process.env.SECRET_KEY;

const mongoURI =
  NODE_ENV === "development"
    ? "mongodb://localhost:27017/testdb"
    : process.env.mongoURI;

    
module.exports = Object.freeze({ mongoURI, PORT, SECRET_KEY }); //
 