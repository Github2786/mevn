const express = require('express');
const MasterRoute = express.Router();
const path = require('path')
const ServiceMasterModel = require('../models/ServiceModel')
const StatusMasterModel = require('../models/StatusModel')
const priorityMasterModel = require('../models/PriorityModel')
const statusMasterModel = require('../models/StatusModel')
const clientMasterModel = require('../models/ClientsModel')

//*************************************ServiceMasterModel****************************************** */
//get Service category
MasterRoute.route('/getServiceCategory').get((req, res) => {
        ServiceMasterModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //create Service category
MasterRoute.route('/create-ServiceCategory').post((req, res, next) => {
        ServiceMasterModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update ServiceCategory
MasterRoute.route('/update-ServiceCategory/:id').post((req, res, next) => {

        if (id.match(/^[0-9a-fA-F]{24}$/)) {

            ServiceMasterModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                        // console.log('updated!' + data)
                }
            })
        }
    })
    //update ServiceCategory
MasterRoute.route('/delete-ServiceCategory/:id').delete((req, res, next) => {

    ServiceMasterModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})

//***************************************ServiceMasterModel ends**************************************** */

//***************************************StatusMasterModel**************************************** */
//get Service status
MasterRoute.route('/getServicestatus').get((req, res) => {
        StatusMasterModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //create Service status
MasterRoute.route('/create-Servicestatus').post((req, res, next) => {
        StatusMasterModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update ServiceCategory
MasterRoute.route('/update-Servicestatus/:id').post((req, res, next) => {

        if (id.match(/^[0-9a-fA-F]{24}$/)) {

            StatusMasterModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                        // console.log('updated!' + data)
                }
            })
        }
    })
    //update ServiceCategory
MasterRoute.route('/delete-Servicestatus/:id').delete((req, res, next) => {

    StatusMasterModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})

//***************************************priorityMasterModel**************************************** */
//get Service status
MasterRoute.route('/getServicepriority').get((req, res) => {
        priorityMasterModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //create Service status
MasterRoute.route('/create-Servicepriority').post((req, res, next) => {
        priorityMasterModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update ServiceCategory
MasterRoute.route('/update-Servicepriority/:id').post((req, res, next) => {

        // if (id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log(req.params.id)
        priorityMasterModel.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                        // console.log('updated!' + data)
                }
            })
            // }
    })
    //update ServiceCategory
MasterRoute.route('/delete-Servicepriority/:id').delete((req, res, next) => {

    priorityMasterModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})


//***************************************priorityMasterModel**************************************** */
//get Service status
MasterRoute.route('/getServicestatus').get((req, res) => {
        statusMasterModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //create Service status
MasterRoute.route('/create-Servicestatus').post((req, res, next) => {
        statusMasterModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update ServiceCategory
MasterRoute.route('/update-Servicestatus').patch((req, res, next) => {

        statusMasterModel.findByIdAndUpdate(req.body._id, {
                $set: req.body,
                useFindAndModify: false
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                        // console.log('updated!' + data)
                }
            })
            // }
    })
    //update ServiceCategory
MasterRoute.route('/delete-Servicestatus/:id').delete((req, res, next) => {

    statusMasterModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})

//***************************************ClientMasterModel**************************************** */
//get clients
MasterRoute.route('/getclients').get((req, res) => {
        clientMasterModel.find((error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //create clients
MasterRoute.route('/create-clients').post((req, res, next) => {
        clientMasterModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update clients
MasterRoute.route('/update-clients').patch((req, res, next) => {

        clientMasterModel.findByIdAndUpdate(req.body._id, {
                $set: req.body,
                useFindAndModify: false
            }, (error, data) => {
                if (error) {
                    return next(error);
                } else {
                    res.json(data)
                        // console.log('updated!' + data)
                }
            })
            // }
    })
    //update clients
MasterRoute.route('/delete-clients/:id').delete((req, res, next) => {

    clientMasterModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})
module.exports = MasterRoute;