const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NotificationSchema = new Schema({

    user: {
        type: String,
        unique: true
    },
    user_id: {
        type: String
    },
    fcmtoken: {
        type: String
    }

}, {
    collection: 'fcm_message'
})

module.exports = mongoose.model('Notification', NotificationSchema)