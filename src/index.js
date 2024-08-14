// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
/// -r dovenv/config in package.json
dotenv.config({
    path:'./env'
})

connectDB()





/*
// FIRST APPROCH TO CONNECT DATABASE
import express from "express"
const app = express();
;(async () => {
    try {
        await mongoose.connect(`${process.env.mongoDB_URI}/${DB_NAME}`); // string chaiye hoti hai
        app.on("ERRORR",(error)=>{
            console.log(error) // jab express se connect na ho paye
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Listening on prot ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})();
*/
