let FCM = require('fcm-node');
let serverKey = 'AAAAYkY3d4U:APA91bG_p2Y5TekU1B1ww7HdMdv2kGuE-6B5avwA11VZB7Z89sOUYVOOdjibBKVpSimjuUatHFk57xKutIiqNFcv7eXY_O6bf4EoWFt9OZEm7aU6S0nvL5PXXN8DwoYjlZxHIUkanFkZ';
let fcm = new FCM(serverKey);


var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: ' cqE4FxlfrXuFQwuqf5DbMe:APA91bGr1GGk3CQeHV3AOG3OPlervtlFc8WRU8SPT-8a0ZhVTrs6iS1nov3kXw-nzsRIy6tZubGkF0oGPsl0GbVsK-1MXmIjR3TZaVe9RcSCo4-qeUUXtoOI2qaPQFE6PxxOcja3C8Y5',
    collapse_key: 'your_collapse_key',

    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    },

    data: { //you can send only notification or only data(or include both)
        my_key: 'my value',
        my_another_key: 'my another value'
    }
};

fcm.send(message, function(err, response) {
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});