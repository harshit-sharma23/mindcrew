const fs=require('fs/promises');
const mergeFiles=async(req,res)=>{
    try{
    const file1=req.files[0];
    const file2=req.files[1];
    let [data1,data2]= await Promise.all([fs.readFile(file1.path,'utf-8'),fs.readFile(file2.path, 'utf-8')]);
    const mergeData=data1+'\n'+data2;
    return res.status(200).json({
        data:mergeData
    })
    }catch(error){
        return res.status(400).json({
            message:error.message
        })
    }
}

module.exports = {
    merge: mergeFiles
};
