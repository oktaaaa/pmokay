const { PesertaPensiun } = require('../models/pesertaPensiun')

class PesertaPensiunController{
    //create/add peserta
    static async createPesertaPensiun(req, res){
        

        try{
            const pesertaExists = await PesertaPensiun.findOne({ "$or": [ { email: req.body.email }, { nipen: req.body.nipen} ] })
            if(pesertaExists){
                return res.status(400).json({error: "Peserta Pensiun already exists"})
            }

            const pesertapensiun = new PesertaPensiun({
                tgl_pensiun: req.body.tgl_pensiun,
                nipen: req.body.nipen,
                nama_peserta: req.body.nama_peserta,
                tgl_lahir: req.body.tgl_lahir,
                alamat: req.body.alamat,
                nohp: req.body.nohp,
                email: req.body.email,
                nama_bank:req.body.nama_bank,
                no_rek: req.body.no_rek,
                besar_mp: req.body.besar_mp,
                unit_pln: req.body.unit_pln
            })
            const pesertasData = await pesertapensiun.save()
            res.status(200).json({message: 'Peserta Pensiun Created'})
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getPesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.find()
            res.status(200).json(peserta)
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async getPesertaPensiunById(req, res){
        try{
            const peserta = await PesertaPensiun.findById(req.params.id)
            res.status(200).json(peserta)
        }catch(error){
            res.status(500).json(error)
        }
    }

    static async getNipen(req, res){
        try{
            const nipen = await PesertaPensiun.find({"nipen": req.params.nipen})
            res.status(200).json(nipen)
        }catch(error){
            res.status(500).json(error)
        }
    }

    // update
    static async updatePesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json({
                message: "Peserta Updated",
                Data: peserta
            })
        }catch (error){
            res.status(500).json(error)
        }
    }

    // delete
    static async deletePesertaPensiun(req, res){
        try{
            const peserta = await PesertaPensiun.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: "Peserta Deleted"
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
}
// export the module yeee
module.exports = PesertaPensiunController