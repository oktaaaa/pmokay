const { UnitPLN } = require('../models/unitPln')

class UnitPlnController{
    //create unit
    static async createUnitpln(req, res){
        const unitpln = new UnitPLN({
            kode_unit: req.body.kode_unit,
            nama_unit: req.body.nama_unit
        })

        try{
            const unitsData = await unitpln.save()
            res.status(200).json({message: 'Unit Added'})
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getUnitsPln (req, res){
        try{
            const unit = await UnitPLN.find()
            res.status(200).json(unit)
        } catch(error){
            res.status(500).json(error)
        }
    }

    static async getUnitPlnById (req, res){
        try{
            const unitpln = await UnitPLN.findById(req.params.id)
            res.status(200).json(unitpln)
        }catch(error){
            res.status(500).json(error)
        }
        
    }

    // search by unit name
    static async searchUnit (req, res){
        try{
            const unitpln = await UnitPLN.find(req.params.nama_unit)
            res.status(200).json(unitpln)
        }catch(error){
            res.status(500).json(error)
        }
        
    }

    // update just in case ehehehe
    static async updateUnitPln (req, res){
        try{
            const unitpln = await UnitPLN.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json({
                message: "Unit Updated",
                Data: unitpln
            })
        } catch(err){
            res.status(500).json({
                Message:err.message
            })
        } 
    }

    static async deleteUnitPln(req, res){
        try{
            const unit = await UnitPLN.findByIdAndRemove(req.params.id)
            res.status(200).json({
                message: "Unit Deleted"
            })
            
        } catch(error){
            res.status(500).json(error)
        }
       
    }
   
}

module.exports = UnitPlnController