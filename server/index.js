const express=require('express');
const router= require('./routes/routes.js');
const cors=require('cors')
const DBConnection=require( './database/db.js');
require('dotenv').config()

const app=express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router)

DBConnection();

app.listen(process.env.PORT,()=>console.log(`server is running on PORT ${process.env.PORT}`))