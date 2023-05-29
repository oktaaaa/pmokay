const {Tanggungan} = require('../models/tanggungan')
const PesertaPensiunController = require('../controllers/pesertaPensiun')
const { PesertaPensiun } = require('../models/pesertaPensiun')
const mongoose = require('mongoose')

class TanggunganController{
    //create tanggungan
    static async createTanggungan (req, res){
        const pesertaPensiun = await PesertaPensiun.find({"nipen": req.body.nipen})
        console.log(pesertaPensiun);
        const tanggunganData = new Tanggungan({
            nipen: req.body.nipen,
            nama_peserta: req.body.nama_peserta,

            // nipen: pesertaPensiun.nipen,
            // nip: mongoose.Types.ObjectId(pesertaPensiun.nip),
            // nama_peserta: pesertaPensiun.nama_peserta,
            nik_tanggungan: req.body.nik_tanggungan,
            tgl_lahir: req.body.tgl_lahir,
            nama_tanggungan: req.body.nama_tanggungan,
            relasi: req.body.relasi
        })
        
        const saveTanggungan = await tanggunganData.save()

        if(saveTanggungan){
            res.status(200)
        } else{
            res.status(500)
        }
    }

    static async getTanggungan (req, res){
        try{
            const tanggungan = await Tanggungan.find()
            res.status(200).json(tanggungan)
        } catch (error){
            res.status(500).json(error)
        }
    }

    static async deleteTanggungan(req, res){
        try{
            const peserta = await Tanggungan.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: "Tanggungan Deleted"
            })
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async getTanggunganById(req, res){
        try{
            const tanggungan = await Tanggungan.findById(req.params.id)
            res.status(200).json(tanggungan)
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async updateTanggungan (req, res){
        try{
            const tanggungan = await Tanggungan.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                message: "Tanggungan Updated",
                Data: tanggungan
            })
        } catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = TanggunganController