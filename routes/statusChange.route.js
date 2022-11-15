const express = require('express');
const StatusChangeRoute = express.Router();
const path = require('path')

const StatusChangeModel = require('../models/StatusChange')
const JobassignModel = require('../models/JobassignModel')

StatusChangeRoute.route('/getStatusChange/:id').get((req, res) => {
    StatusChangeModel.find({ projectId: req.params.id }, (error, data) => {
        console.log("a" + JSON.stringify(req.params.id))
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
StatusChangeRoute.route('/getStatusChange').get((req, res) => {
    StatusChangeModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
StatusChangeRoute.route('/create-StatusChange').post((req, res, next) => {
        StatusChangeModel.create(req.body, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })
    //update ServiceCategory
StatusChangeRoute.route('/update-StatusChange/:id').post((req, res, next) => {

        // if (id.match(/^[0-9a-fA-F]{24}$/)) {

        StatusChangeModel.findByIdAndUpdate(req.body._id, {
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
StatusChangeRoute.route('/delete-StatusChange/:id').delete((req, res, next) => {

    StatusChangeModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})

// Jobassign Section
StatusChangeRoute.route('/getJobassign').get((req, res) => {
    JobassignModel.find((error, data) => {
        //console.log("a" + JSON.stringify(req.params.id))
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
StatusChangeRoute.route('/create-Jobassign').post((req, res, next) => {
    JobassignModel.create(req.body, (error, data) => {
        console.log("da" + req.body)
        if (error) {
            console.log("da" + error)
            return next(error)
        } else {
            res.json(data)
            console.log("data" + data)
        }
    })
})
StatusChangeRoute.route('/update-Jobassign/:id').post((req, res, next) => {

        // if (id.match(/^[0-9a-fA-F]{24}$/)) {

        JobassignModel.findByIdAndUpdate(req.body._id, {
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
StatusChangeRoute.route('/delete-Jobassign/:id').delete((req, res, next) => {

    JobassignModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })

})
module.exports = StatusChangeRoute;