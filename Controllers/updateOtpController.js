const studentRegister = require ("../Model/studentRegister")

exports.updateOtp = async(mobile, email, otp) =>{
    
    var mobile_no = ""+mobile;
    var otp1 = ""+otp;
    
    try{

        await studentRegister.updateOne({mobile: mobile_no}, {otp: otp1});
        console.log("updated otp successfully")
    } catch(error){
        console.log(error);
    }
}

exports.updateOtpStatus = async(email, otpstatus)=>{
    try{
        await studentRegister.updateOne({email:email}, {otpstatus:"true"})
        
    }
    catch(error){
        console.log(error)
    }
}