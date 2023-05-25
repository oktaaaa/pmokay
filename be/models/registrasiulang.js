const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RegistrasiUlang = mongoose.model('RegistrasiUlang', {
    nipen:{
        type: String,
        required:true
    },
    nama_peserta:{
        type: String,
        required:true
    },
    // ktpWajah:{
    //     type: String,
    //     required:true
    // },
    // ktp:{
    //     type: String,
    //     required:true
    // }
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = { RegistrasiUlang }