const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    pic: {
        type: String
    },
    name: {
        type: String
    },
    mob: {
        type: String
    },
    email: {
        type: String
    },
    description: {
        type: String
    },
}, {
    collection: 'Customers'
})

module.exports = mongoose.model('Customers', postSchema)