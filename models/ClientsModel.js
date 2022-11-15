const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({

    ClientName: {
        type: String,
        unique: true
    },
    Permissions: {
        type: String
    },
    Status: {
        type: String
    },
    Username: {
        type: String,
        unique: true
    },
    Password: {
        type: String
    },
    createdDate: {
        type: String
    }

}, {
    collection: 'Client'
})

module.exports = mongoose.model('Clients', clientSchema)