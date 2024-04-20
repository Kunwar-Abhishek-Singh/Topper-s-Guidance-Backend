const studentRegister = require("../Model/studentRegister")
const bcrypt = require ('bcryptjs')

const UpdatePassword = async (req, res) => {

    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    // const {email} = req.params;
    const email = req.body.email;
    try {
        if (!password || !confirmPassword) {
            return res.status(400).json({ error: "plz fill the data" })
        }
        const hashed_pwd = await bcrypt.hashSync(password,12);
        const hashed_confirm_pwd = await bcrypt.hashSync(confirmPassword,12);
        const update_pwd = await studentRegister.findOneAndUpdate({email:email}, { password: hashed_pwd }, { new: true })
        const update_confirm_pwd = await studentRegister.findOneAndUpdate({email:email}, { confirmpassword: hashed_confirm_pwd }, { new: true })
        if(update_pwd && update_confirm_pwd){
             await studentRegister.updateOne({email:email},{$set:{tokens:[]}})
            
        }
        res.json("password updation and token deletion done")
        
       
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });

    }
}

module.exports = {
    UpdatePassword
}