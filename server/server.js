import express, { urlencoded } from "express";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";



const client = new MongoClient('mongodb+srv://vahehovakimyan19:Fal1x8HoZ90ntk39@clustertask.uq6oxrq.mongodb.net/?retryWrites=true&w=majority');


(async function () {

    await client.connect();

    const app = express();

    app.use(express.static("../client/build"));

    app.use(express.json());

    const cleanup = (event) => {
        client.close();
        process.exit();
    }


    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);


    // Add data in db

    const Usersdb = client.db("Users");

    app.post("/register/user/data", async (req, res) => {

        let responseBool = {
            regbool: false
        }

        const UsersCollection = Usersdb.collection('Users');


        try {

            const checkBool = await UsersCollection.find({ "username": req.body.username }).toArray();

            if (checkBool.length === 0) {

                responseBool = {
                    regbool: true
                }

                await UsersCollection.insertOne(req.body);

            } else {
                return res.send(responseBool);
            }

        } catch (error) {
            console.error(error);
        }

        res.send(responseBool);
    });


    // Checking and sending data for login page


    app.post("/login/user/data", async (req, res) => {

        const UsersCollection = Usersdb.collection('Users');

        let isAdmin = {
            bool: false,
            username: req.body.username
        }


        try {

            const UsersCollectionInfo = await UsersCollection.find({ "username": req.body.username }).toArray();

            console.log(UsersCollectionInfo.length !== 0);

            if (UsersCollectionInfo.length !== 0) {
                if (UsersCollectionInfo[0].password === req.body.password) {
                    isAdmin = {
                        bool: true,
                        username: req.body.username
                    }
                }
            } else {
                return res.send(isAdmin);
            }

        } catch (error) {
            console.error(error);
        }

        res.send(isAdmin);

    });



    // Sending data for user

    const Accountdb = client.db("AccountPage");

    app.get("/account/elems/data", async (req, res) => {

        const AccountCollection = Accountdb.collection('AccountElems');
        try {
            const AccountCollectionInfo = await AccountCollection.find({}).toArray();
            res.send(AccountCollectionInfo);
        } catch (error) {
            console.error(error);
        }

    })

    //////////////////

    app.get('*', function (request, response) {
        const filePath = path.resolve("../client/build/index.html");
        response.sendFile(filePath);
    });


    app.listen(process.env.APP_PORT, () => {
        console.log(`Server started in 5000 port`);
    })

})()