const imageModel = require("../models").imageModel;
const cloudinary = require("../utils/cloudinary")

const addImage = async(req,res)=>{
    try{
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,(err,result)=>{
                try{
                    return result
                }catch(err){
                    return err
                }
            }
        );
        const Data = {
            name: req.body.name,
            age: req.body.age,
            imageUpload: req.secure_url,
            comment: req.body.comment
        }
        const addedImage = await imageModel.create(Data);
        res.status(201).json({
            message: "New record has been created",
            data: addedImage
        });
    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}

const allImage = async(req,res)=>{
    try{
        const entireImage = await imageModel.findAll();
        res.status(200).json({
            message:"All Records",
            data: entireImage
        });
    }catch(e){
        res.status(400).json({
            message: e.message
        });
    }
}

module.exports = {
    addImage,
    allImage
};