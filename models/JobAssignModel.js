const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jobassignSchema = new Schema({
    jobId: {
        type: String
    },
    assignedTo: {
        type: Array
    },
    assignedby: {
        type: String
    },
    date: {
        type: String
    },
    remarks: {
        type: String
    },
}, {
    collection: 'Jobassign'
})

module.exports = mongoose.model('Jobassign', jobassignSchema)