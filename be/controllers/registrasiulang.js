const { RegistrasiUlang } = require('../models/registrasiulang')


class RegistrasiUlangController{
    static async createRegistrasiUlang(req, res){
        const { filename } = req.file;
        const registrasiulang = new RegistrasiUlang({
            nipen: req.body.nipen,
            nama_peserta: req.body.nama_peserta,
            ktpWajah: filename,
            // ktp: req.body.file,
            created_at:req.body.created_at
        })

        try{
            const registrasiData = await registrasiulang.save()
            res.status(200).json({message: 'Peserta Pensiun Created'})
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getRegistrasiUlang(req, res){
        try{
            const registrasi = await RegistrasiUlang.find()
            res.status(200).json(registrasi)
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async deleteRegistrasiUlang(req, res){
        try{
            const regUlang = await RegistrasiUlang.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: "Registrasi Deleted"
            })
            
        } catch(error){
            res.status(500).json(error)
        }
       
    }
}

module.exports = RegistrasiUlangController