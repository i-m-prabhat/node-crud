const http = require("http");
const app = require("./app");
const config = require('./config/config.json')
const mongoose = require("mongoose");




const server = http.createServer(app);
require("dotenv").config();
const port = process.env.PORT || 5000
// console.log(process.env.PORT);
const dbConnection = process.env.CONNECTION || config.database.mongodb.atlas;


server.listen(port, () =>
{
    console.log(`Server Started on PORT ${port}`);
    // mongoose connection 
    // try
    // {
    //     mongoose.connect(dbConnection, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     });
    //     console.log("Database connection created");
    // } catch (error)
    // {
    //     console.log("Database connection failed due to", error);
    // }

    mongoose.connect(dbConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => (
        console.log("Database connection created")
    )).catch((err) =>
    {
        console.log("Database connection failed due to", err)
    })
})



