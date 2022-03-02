const mongoose=require("mongoose")

const FormSchema=mongoose.Schema({
    title:{type:String},
    Description:{type:String},
    Status:{
        type:String,
        enum:['open','In-progess','completed']
    },
},{timestamps:true});

module.exports = mongoose.model("Form",FormSchema);