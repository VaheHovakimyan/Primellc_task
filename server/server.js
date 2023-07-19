import express, { urlencoded } from "express";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";



const client = new MongoClient('mongodb+srv://vahehovakimyan19:Fal1x8HoZ90ntk39@clustertask.uq6oxrq.mongodb.net/?retryWrites=true&w=majority ');


(async function () {

    // await client.connect();

    const app = express();

    app.use(express.static("../client/build"));

    app.use(express.json());

    try {
        await client.connect();
        console.log("Mongo is connected");
    } catch (e) {
        console.log(e);
    }



    // Add data in db

    app.post("/register/user/data", (req, res) => {
        console.log("That is work!");
        res.send("User is added!");
    });


    // Sending data for user

    app.get("/account/elems/data", (req, res) => {
        console.log("Good");
        res.send("Data examples");
    })

    //////////////////

    app.get('*', function (request, response) {
        const filePath = path.resolve("../client/build/index.html");
        // console.log(filePath);
        response.sendFile(filePath);
    });



    app.listen(5000, () => {
        console.log(`Server started in 5000 port`);
    })

})()