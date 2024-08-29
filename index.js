const express=require('express');
const app=express()
const cors=require('cors')

const config=require('./src/config/config');
const userRoute=require('./src/route/user.route');
const fileRoute=require('./src/route/file.route');
require('./src/config/databases');


const port=config.serverPort;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1/user', userRoute);
app.use('/v1/file', fileRoute);
app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
})