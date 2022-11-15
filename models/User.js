const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({

    Name: {
        type: String
    },
    Mob: {
        type: String
    },
    Username: {
        type: String
    },
    Password: {
        type: String
    },
    Area: {
        type: String
    },
    Userrole: {
        type: String
    },
    Status: {
        type: String
    },

}, {
    collection: 'Users'
})

module.exports = mongoose.model('Users', postSchema)