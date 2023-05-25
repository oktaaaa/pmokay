const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Tanggungan = mongoose.model('Tanggungan', {
    nipen: {
        type: String,
        required: true
    },
    nama_peserta:{
        type: String,
        required:true
    },
    nik_tanggungan:{
        type: String,
        required:true
    },
    tgl_lahir:{
        type: Date,
        required: true
    },
    nama_tanggungan:{
        type: String,
        required:true
    },
    relasi:{
        type: String,
        required:true
    }
})

module.exports = { Tanggungan }