const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10
const jwt = require('jsonwebtoken')
const jwtSecret =
  "4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd";

class UserController{
    static async createUser(req, res){
        
        try{
            const { nipen, namaLengkap, tglLahir, email, password} = req.body
            //check if user already exists by email or nipen
            const userExists = await User.findOne({ "$or": [ { email: email }, { nipen: nipen} ] })
            if(userExists){
                return res.status(400).json({error: "User already exists"})
            }

            //hash password
            const salt = await bcrypt.genSalt(saltRounds)
            const hashPassword = await bcrypt.hash(password, salt)

            //checked if not then create
            const user = new User({ nipen, namaLengkap, email, password:hashPassword })
            const usersData = await user.save()
            res.status(200).send({ message: "User created successfully" })

        }catch(error){
            res.status(500).json(error)
        }
    }

    static async loginUser(req, res){
        const {email, password} = req.body
        try{
            const user = await User.findOne({ email })
            if (!user){
                return res.status(400).send({ message: "Invalid Email or Password" })
            } else{
                const validPassword = bcrypt.compare(
                    password,
                    user.password
                )

                if (validPassword){
                    const token = jwt.sign({ id: user._id, email }, jwtSecret,
                        {
                          expiresIn: '2h', // 3hrs
                        })
                    return res.status(200).json({status: 200, data: token, message: 'Login success'})
                } else{
                    return res.status(400).send({ message: "Invalid Email or Password" })
                } 
            }
            
        }catch(error){
            res.status(500).send({ error: error.message })
        }
    }

    static async getUsers(req, res){
        try{
            const user = await User.find()
            res.status(200).json(user)
        }catch(error){
            res.status(500).json(error)
        }
    }

    
}

module.exports = UserController