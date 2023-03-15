const path=require('path')
const rootDir = path.dirname(require.main.filename);
exports.SignupPage=(req,res,next)=>{
    console.log(req);
    // res.sendFile(path.join(rootDir,'public','html','signup.html'))
    res.send('Hemml')
}