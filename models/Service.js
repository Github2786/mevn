const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({

    Service_Date: {
        type: String
    },
    serviceTitle: {
        type: String
    },
    projectName: {
        type: String
    },
    ClientName: {
        type: String
    },
    Region: {
        type: String
    },
    Img: {
        type: String
    },
    pending_time: {
        type: String
    },
    doing_time: {
        type: String
    },
    done_time: {
        type: String
    },
    Imgs: {
        type: String
    },
    SolutionDecription: {
        type: String
    },
    Priority: {
        type: String
    },
    Finished_Time: {
        type: String
    },
    Status: {
        type: String
    },
    ReportedTime: {
        type: String
    },
    AttendedBy: {
        type: String
    },
    ServiceDecription: {
        type: String
    },
    serviceCategoryName: {
        type: String
    },
    assignedStatus: {
        type: String
    },
    assignedTo: {
        type: Array
    },

}, {
    collection: 'Services'
})

module.exports = mongoose.model('Services', postSchema)