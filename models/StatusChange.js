const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let statusChangeSchema = new Schema({

    section: {
        type: String
    },
    currentStatus: {
        type: String
    },
    projectId: {
        type: String
    },
    remarks: {
        type: String
    },
    changedBy: {
        type: String
    },
    date_: {
        type: String
    }


}, {
    collection: 'statusChange'
})

module.exports = mongoose.model('statusChanges', statusChangeSchema)