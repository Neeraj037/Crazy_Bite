import mongoose from "mongoose";
const connect=async()=>{
     try {
        mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connect sucessfully');
        }).catch((error)=>{
            console.log(`error occured in connecting database ${error}`);
        })
     } catch (error) {
        console.log(`error occured in connecting database ${error}`);
     }
}
export default connect;