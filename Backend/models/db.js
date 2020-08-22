
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blogMaster:Welcome@123@cluster0.d4zl4.mongodb.net/Blogdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log("Mongoose Connected");
    } else {
        console.log("Error while connecting the mongoose");
    }
})

require('./blog');