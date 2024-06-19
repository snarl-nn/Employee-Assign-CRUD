const express = require('express');
const employeesRoute = express.Router();


let EmployeeModel = require('../models/Employees')


employeesRoute.route('/').get((req, res, next) => {
    EmployeeModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Create Data
employeesRoute.route('/create-employee').post((req, res, next) => {
    EmployeeModel.create(req.body, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})


//Edit
employeesRoute.route('/edit-employee/:id').get((req, res, next) => {
    EmployeeModel.findById(req.params.id, (error, data)=> {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Update
employeesRoute.route('/update-employee/:id').put((req, res, next) => {
    EmployeeModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error,data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Employee successfully update');
        }
    })
})

//Delete
employeesRoute.route('/delete-employee/:id').delete((req, res, next) => {
    EmployeeModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = employeesRoute;
