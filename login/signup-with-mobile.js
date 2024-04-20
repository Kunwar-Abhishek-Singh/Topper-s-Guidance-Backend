const {sentOtp} = require("../Common/sentOtp");
const { updateOtp } = require("../Controllers/updateOtpController");

const signup_otp_WithMobile = async (req, res) => {
    const mobile = req.body.mobile;
    const mobile_number = req.body.mobile_no;
    const email = req.body.email;
    
    var otp = Math.floor(100000 + Math.random() * 900000);
    sentOtp(mobile_number, "Student", otp)
    var result = {"otp": otp};
    
    res.json(result);
    // console.log(req.body)
      
        updateOtp(mobile,email, otp)








    
    // if(otp){
    //     const resultSR = await studentRegister.updateOne({email:email}, {otp: otp})

    // }


} 

// const verify_mobile_otp = async(req, res) =>{
//     const mobile_otp = req.body.otp;
//     console.log(req.body);
    
// }

module.exports = {
    signup_otp_WithMobile
}