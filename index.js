globalString = "https://db4sgowjqfwig.cloudfront.net/images/4136367/elliot.PNG";

const express = require('express')
const app = express()
app.use(express.static('public'))
app.use(express.json());
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    //res.sendFile(__dirname + '/get.html');
    res.redirect('/get.html');
});

app.post("/setImage", function(req, res){
    console.log(req.body);
    globalString = req.body.imageUrl;
    res.sendStatus(200);
});

app.get("/getImage", function(req, res) {
    res.send(globalString);
})

app.listen(3000, () => console.log('Example app listening on port 3000'))