const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let statusSchema = new Schema({

    statusname: {
        type: String,
        unique: true
    },
    status: {
        type: String
    },
    createdDate: {
        type: String
    }

}, {
    collection: 'serviceStatus'
})

module.exports = mongoose.model('ServiceStatus', statusSchema)