const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const student_register_schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: String,
    password: String,
    confirmpassword: String,
    otp: String,
    otpstatus: String,
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
}) 

student_register_schema.methods.generateAuthToken = async function (){
    try {
        let token_id = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        // console.log(process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token_id});
        await this.save();
        return token_id;
    } catch (error) {
        console.log(error);
    }
}

student_register_schema.pre('save', async function(next){
    console.log(this.password)
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password, 12);
        this.confirmpassword = bcrypt.hashSync(this.confirmpassword, 12);
    }    
    
    next();
});

const student_register_model = mongoose.model("studentregister", student_register_schema);
module.exports = student_register_model;