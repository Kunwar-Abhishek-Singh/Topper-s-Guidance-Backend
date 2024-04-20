const student_register_model = require("../Model/studentRegister");

exports.student_register_data = async(req, res)=>{
    console.log(req.body);
    // res.send("User Registered his details successfully");

    const {firstname, lastname, email, mobile, password, confirmpassword, otp, otpstatus} = req.body;
    if(!firstname || !lastname || !email || !mobile || !password || !confirmpassword){
        res.status(400).send("plzz fill all the fields");
        return false;
    }
    const userExist_email = await student_register_model.findOne({email:email})
    const userExist_mobile = await student_register_model.findOne({mobile:mobile})
    if(userExist_email || userExist_mobile){
        res.status(400).send("User already got registered here!!!!!");
        console.log("user found")
        return false;
    }
    // if(password !== confirmpassword){
    //     res.status(400).send("confirm password not matched with the password");
    //     return false;
    // }

    try {
            
            
                const newUser = new student_register_model({firstname, lastname, email, mobile, password, confirmpassword, otp, otpstatus});
                await newUser.save();
                res.status(200).json({message:true})
                
            
        
        
        
        
    } catch (error) {
        console.log(error);
        
    }
}

exports.get_student_register_data = async(req, res)=>{
    try{
        const student_register_list = await student_register_model.find({})
        res.status(200).send(student_register_list)
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:"this error is from backend"})
    }
}

exports.get_single_user = async(req, res)=>{
    const {email} = req.params;
    try {
        const single_user = await student_register_model.findOne({email:email})
        res.status(200).send(single_user)
    } catch (error) {
        res.status(404).send("this error is from backend")        
    }
}