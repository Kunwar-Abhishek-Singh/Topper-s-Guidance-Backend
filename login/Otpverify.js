// const {sentOtp} = require("../Common/sentOtp");
const   {updateOtpStatus}  = require("../Controllers/updateOtpController");
const studentRegister = require("../Model/studentRegister")

const OtpVerify = async (req, res) => {
    console.log(req.body)

    const mobile = req.body.mobile;
    // const mobile_number = req.body.mobile_no;
    //console.log("")
    const entered_otp = req.body.entered_otp;
    const email = req.body.email;
    const otpstatus = 'true';


    const result = await studentRegister.find({mobile: mobile, email: email})
    console.log(result[0].otp)
    if(result[0].otp === entered_otp){
        res.json({otp_message: true})
        console.log("Otp verified");
        updateOtpStatus(email, otpstatus)
    }
    else{
        res.json({otp_message: false})
        console.log("otp not matched");
        return false;
    }


} 


const forgot_password_otp_verify = async (req, res) =>{
    console.log(req.body)
    const mobile = req.body.mobile;
    const entered_otp = req.body.entered_otp;
    const email = req.body.email;
    
    const result = await studentRegister.find({mobile:mobile, email:email})
    console.log(result[0].otp)
    if(result[0].otp === entered_otp){
        res.json({otp_message:true})
        console.log("otp verified")
    }
    else{
        res.json({otp_message:false})
        console.log("otp not matched")
    }
}

module.exports = {
    OtpVerify, forgot_password_otp_verify
}