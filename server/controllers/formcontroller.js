const Formmodel = require("../models/Formmodel.js")

const createForm = async function(req,res) {
    try{
        let data = req.body
        if(data.title || data.Description || data.Status){
            let savedData = await Formmodel.create(data)
            return res.status(201).send({status:true,msg: savedData})
        }else{
            return res.status(400).send({status:false,msg:"please provide data"})
        }

        }catch (err){
            return res.status(500).send({status:false, msg:"server failure",err})
        }
    }

const updateForm = async function(req,res){
    try{
        let newData = req.body
        let formid  = req.params.formid
        
        let checkingIt = await Formmodel.findOne({_id:formid})

        if (checkingIt){
            let formupdated = await Formmodel.findOneAndUpdate({_id:formid},newData,{upsert:true,new:true})
            return res.status(200).send({status:true,msg:'form updated',newform:formupdated})
        }else{
            return res.status(400).send({status:false,msg:"please provide updated data"})
        }
       
    }
catch (err){
    return res.status(500).send({status:false,msg:"something went wrong",err})

}
};

module.exports.createForm = createForm
module.exports.updateForm = updateForm