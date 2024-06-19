const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    name:   {
        type : String
    },
    surname:   {
        type : String
    },
    sex:   {
        type : String
    },
    birthD:   {
        type : String
    },
    address:   {
        type : String
    },
    sub:   {
        type : String
    },
    district:   {
        type : String
    },
    province:   {
        type : String
    },
    personalCardD:   {
        type : String
    }
},{
    collection: 'employees'
})

module.exports = mongoose.model('Employee', employeeSchema);