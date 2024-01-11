// 1. Import libraries
const express = require('express');
const app = express();

// 2. Create Server
const port = 8000;
const db = require('./config/mongoose')

//3.Used for Session Cookie
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy')

//4. request handler
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());

//5. Use express router
app.use('/', require('./routes/index'))

//6. App listening to port
app.listen(port, function (error) {
    if (error) {
        console.log(`Error in running the Server. Error is : ${error}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})
