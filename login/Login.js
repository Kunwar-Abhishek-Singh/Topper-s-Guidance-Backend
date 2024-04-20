const studentRegister = require("../Model/studentRegister")
const bcrypt = require ('bcryptjs')
const jwt = require("jsonwebtoken")
const Login = async(req, res)=>{
    console.log(req.body)
    const email = req.body.username;
    const password = req.body.pwd;

    
    try {
        let token_id;
        if(!email || !password){
            return res.status(400).json({error:"plz fill the data"})
        }
        
        const result = await studentRegister.findOne({email:email})
        console.log(result)
        console.log(password)
        console.log("this is the otpstatus showing")
        console.log(result.otpstatus)
        
        if(result.otpstatus===""+true){
            
                const isMatch = await bcrypt.compare(password, result.password);
                
                console.log("here we are presenting the newly created jwtoken id")
                
                if(!isMatch){
                    res.json({login_message: false})
                    console.log("failed")
        
                }
                else{
                    token_id  = await result.generateAuthToken();
                    console.log("Passed")
                    console.log("cookies saved on browsers")
                    res.json({login_message:true, token_id:token_id, _id:result._id})
                }
            
            
            
        }
        else{
            res.json({message:"user Error"})
        }
        
        
    } catch (error) {
        console.log(error)
    }

}

const Logout = async(req, res)=>{
    
    const jwtoken = req.body.jwtoken;
    // console.log(jwtoken)

    try {
        const verifyToken = jwt.verify(jwtoken, process.env.SECRET_KEY)
        console.log(verifyToken._id)
        if(verifyToken){
            const rootUser = await studentRegister.findOne({_id: verifyToken._id})
            // console.log("token got verified successfully")
            // res.send(rootUser)
            const updateTokenStatus = await studentRegister.findByIdAndUpdate(
                verifyToken._id,
                {$pull:{tokens:{token:jwtoken}}},
                {new:true}
            
            );
            res.send("token deactivated")
            if(updateTokenStatus){
                console.log("token deactivated successfully")
            }
        }
        else{
            return false;
        }
        
        
        // const result = await studentRegister.findOne({firstname:jwtoken})
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    Login, Logout
}