const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serviceSchema = new Schema({

    CategoryName: {
        type: String
    },
    Status: {
        type: String
    },
    ServcieDate: {
        type: String
    }

}, {
    collection: 'Category'
})

module.exports = mongoose.model('Categories', serviceSchema)