const jwt = require("jsonwebtoken")
const studentRegister = require("../Model/studentRegister")


const Authenticate = async(req, res)=>{
    try {
        const token = req.body.jwtoken;
        // const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const verifyToken = await studentRegister.findOne({"tokens.token":token}).exec();
        if(verifyToken){
            res.json({auth_status:true})
            console.log("verify token is true")
        }
        else{
            res.json({auth_status:false})
            console.log("problem occurs")
            console.log("verify token is false")
        }
    } catch (error) {
        res.status(401).json({auth_status:false})
        console.log(error);
        
    }
}

module.exports = Authenticate;