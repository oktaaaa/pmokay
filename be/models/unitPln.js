const mongoose = require('mongoose')

// schema

const UnitPLN = mongoose.model('UnitPLN', {
    kode_unit:{
        type: String,
        required:true
    },
    nama_unit:{
        type: String,
        required:true
    }
})

module.exports = {UnitPLN}