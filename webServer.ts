import express from "express";

let app = express();

let port = 8100;

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/contacts', (req, res) => {
    let id = req.body.id;
    let email = req.body.email;
    let fullName = req.body.fullName;
    let content = req.body.content;
    
})

app.get('/downloadFile', (req, res) => {
    res.download('./public/file/Yau Chi Leung.pdf')
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})

