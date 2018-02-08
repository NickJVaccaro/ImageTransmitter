const express = require('express')
const app = express()
app.use(express.static('public'))

globalString = "https://db4sgowjqfwig.cloudfront.net/images/4136367/elliot.PNG";

app.get('/', (req, res) => res.send('Hello world!'))

app.get("/setImage", function(req, res) {
    globalString = req.query.string;
    res.send("Set");
})

app.get("/getImage", function(req, res) {
    res.send(globalString);
})

app.listen(3000, () => console.log('Example app listening on port 3000'))