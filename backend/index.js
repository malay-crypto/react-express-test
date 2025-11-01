const mongoose = require("mongoose");
let express=require('express')
let cors=require('cors')
let multer=require('multer')
dotenv=require('dotenv')

dotenv.config()

let app=express()

app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))
const upload = multer({ dest: 'uploads/' })







let sch=new mongoose.Schema({

    name:String,
    profileImage:String,
    backgroundImage:String,

})

let user=mongoose.model('User',sch,'user')
mongoose.connect('mongodb://localhost:27017/testdb')

app.use((err,req,res,next)=>{
    console.log('express middleware : err : ',err)
    next()
})

app.get('/',async (req,res)=>{

    console.log('get')
   let r=await user.find()
    res.send(r)
})

app.post('/add',
    upload.fields([
        {name:'profileImage'},
        {name: 'backgroundImage'},
    ]),
    async (req,res)=>{
    console.log('body=',req.body)
    console.log('files=',req.files)

        let name=req.body.name
        let profileImage=req.files.profileImage?.[0].filename
        let backgroundImage=req.files.backgroundImage?.[0].filename

        let userData={name,profileImage,backgroundImage}
        await user.create(userData)
        res.send('success')

})




app.listen(3000,()=>{console.log('listening on port 3000!')});

