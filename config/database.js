//Configure Mongoose Module 
// **- Setup MongoDB Atlas (7)
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_CONNECTION, {
    // avoid depreciation warnings:
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});
// **In order for this code to run and connect to the db we must require it in server.js (8)

//shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log (`Connected to MongoDB at ${db.host}: ${db.port}`);
});
// ^^^check terminal for console log.
// **- Next define schemas - go to models/career.js (11)
