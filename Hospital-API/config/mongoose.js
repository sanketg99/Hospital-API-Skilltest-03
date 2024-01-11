const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://sanketbg99:Sanket@123@cluster0.ewcrs64.mongodb.net/?retryWrites=true&w=majority/Hospital_API-DB`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
