const express = require("express");
const env = require("dotenv").config();

const app = express();


app.get("/", (request, response) => {
    //root endpoint --> can be used for server health check
    response.json({message: 'Hello, World'}).status(200);
});


app.listen(process.env.PORT ,(error) => {
   
    if(error){
        console.log(`ERROR : ${error.message}`);
    }else{
        console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
    };
});

