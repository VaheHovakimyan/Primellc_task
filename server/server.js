import express, { urlencoded } from "express";
import path from "path";

const app = express();

console.log("hello");

app.get("/account/data", (req, res) => {
    res.send("OK")
})

//////////////////

app.get('*', function (request, response) {
    const filePath = path.resolve("../client/build/index.html")
    response.sendFile(filePath);
});

app.listen(5000);