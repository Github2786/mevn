const express = require('express');
const postRoute = express.Router();
const path = require('path')
let CutomerModel = require('../models/Customer');
let UserModel = require('../models/User');
let ServiceModel = require('../models/Service');
let NotificationModel = require('../models/NotificationModel');
let FCM = require('fcm-node');
let serverKey = 'AAAAYkY3d4U:APA91bG_p2Y5TekU1B1ww7HdMdv2kGuE-6B5avwA11VZB7Z89sOUYVOOdjibBKVpSimjuUatHFk57xKutIiqNFcv7eXY_O6bf4EoWFt9OZEm7aU6S0nvL5PXXN8DwoYjlZxHIUkanFkZ';;
//login

postRoute.route('/login').post((req, res, next) => {
        // console.log(req.body.password)

        UserModel.find({ Username: req.body.username, Password: req.body.password }, (error, data) => {
            // UserModel.find({ Username: 'Admin', Password: '1234' }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //save_notification by user
    //create Customer
postRoute.route('/save-token').post((req, res, next) => {
        NotificationModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //fcm send 
postRoute.route('/send_fcm').post((req, res, next) => {
    try {
        let fcm = new FCM(serverKey)
        let message = {
            to: req.body.to,
            notification: {
                title: req.body.title,
                body: req.body.body,
                sound: 'default',
                "icon": "fcm_push_icon"

            }
        }

        fcm.send(message, function(err, response) {
            if (err) {
                return next(err);
                console.log("Something has gone wrong!");
            } else {
                res.json(response)
                console.log("Successfully sent with response: ", response);
            }
        });


    } catch (err) {
        return next("catch" + err);
    }

})


//get Customer
postRoute.route('/loadCustomer').get((req, res) => {
    CutomerModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


//create Customer
postRoute.route('/create-user').post((req, res, next) => {
    UserModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postRoute.route('/loadusers').get((req, res) => {
    UserModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postRoute.route('/getToken/:user').get((req, res) => {
        NotificationModel.find({ user: req.params.user }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update customer
postRoute.route('/update-user/:id').post((req, res, next) => {
        UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data)
                console.log('Post updated!')
            }
        })
    })
    // delete Customer
postRoute.route('/delete-user/:id').delete((req, res, next) => {

    UserModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})

//update customer
postRoute.route('/update-customer/:id').post((req, res, next) => {
    CutomerModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Post updated!')
        }
    })
})



// delete Customer
postRoute.route('/delete-customer/:id').delete((req, res, next) => {

    CutomerModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})



//********************load all Service Section ********************************
postRoute.route('/loadServices').get((req, res) => {
    ServiceModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//********************load unassigned Service Section ********************************
postRoute.route('/loadServicesunassigned').get((req, res) => {
    ServiceModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postRoute.route('/loadServices_/:AttendedBy').get((req, res) => {
    // console.log(req.params.AttendedBy)
    //  assignedTo: ["red", "blank"] }
    // ServiceModel.find({ assignedTo: { $all: [req.params.AttendedBy, "Public"] } }, (error, data) => {
    ServiceModel.find({ assignedTo: req.params.AttendedBy, assignedTo: "Public" }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


postRoute.route('/create-service').post((req, res, next) => {
    ServiceModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

postRoute.route('/delete-service/:id').delete((req, res, next) => {

    ServiceModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})


postRoute.route('/update-service/:id').post((req, res, next) => {
    ServiceModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('service updated!')
        }
    })
})

//**********************************************ends ******************** */
// file upload api
postRoute.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory

    let reqPath = path.join(__dirname, '../');
    myFile.mv(`${reqPath}/uploads/service/${myFile.name}`, function(err) {
        if (err) {
            console.log(myFile.name)
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({ name: myFile.name, path: `/${myFile.name}` });
    });
})


postRoute.post('/uploads', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory

    let reqPath = path.join(__dirname, '../');
    myFile.mv(`${reqPath}/uploads/solution/${myFile.name}`, function(err) {
        if (err) {
            console.log(myFile.name)
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({ name: myFile.name, path: `/${myFile.name}` });
    });
})


postRoute.post('/upload_edit', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory

    let reqPath = path.join(__dirname, '../');
    myFile.mv(`${reqPath}/uploads/service/${myFile.name}`, function(err) {
        if (err) {
            console.log(myFile.name)
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({ name: myFile.name, path: `/${myFile.name}` });
    });
})


postRoute.post('/uploads_edit', (req, res) => {

        if (!req.files) {
            return res.status(500).send({ msg: "file is not found" })
        }
        // accessing the file
        const myFile = req.files.file;

        //  mv() method places the file inside public directory

        let reqPath = path.join(__dirname, '../');
        myFile.mv(`${reqPath}/uploads/solution/${myFile.name}`, function(err) {
            if (err) {
                console.log(myFile.name)
                console.log(err)
                return res.status(500).send({ msg: "Error occured" });
            }
            // returing the response with file path and name
            return res.send({ name: myFile.name, path: `/${myFile.name}` });
        });
    })
    //****Uploads end */
module.exports = postRoute;