const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let prioritySchema = new Schema({

    PriorityName: {
        type: String,
        unique: true
    },

    Status: {
        type: String
    },
    createdDate: {
        type: String
    }

}, {
    collection: 'Priority'
})

module.exports = mongoose.model('Priorities', prioritySchema)