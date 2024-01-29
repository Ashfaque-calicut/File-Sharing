const File=require('../models/file.js')
 const uploadImage=async (request,response)=>{
    const fileObj={
        path:request.file.path,
        name:request.file.originalname,
    }
    try {
      const file=await File.create(fileObj);
      response.status(200).json({path:`http://localhost:4000/file/${file._id}`})
    } catch (error) {
        console.error(error.message);
        response.status(500).json({error:error.message})
    }
}
const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        
        file.downloadCount++;

        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}
module.exports={uploadImage,getImage};

