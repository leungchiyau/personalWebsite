import express from "express";

let app = express();

let port = 8100;

app.use(express.static('public'))

app.listen(port,() => {
    console.log(`Listening at http://localhost:${port}/`)
})

