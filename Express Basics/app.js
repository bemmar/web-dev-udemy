//@ts-check

const express = require('express');
let app = express();

app.get("/", function (req, res) {
    res.send("Hello and welcome to my assignment");
});

app.get("/speak/:animal", function (req, res) {
    res.send(`The ${req.params.animal} says foo`);
});

app.get("/repeat/:text/:times", function (req, res) {
    const times = parseInt(req.params.times);
    const text = req.params.text;

    let result = "";

    for (let index = 0; index < times; index++) {
        result += ` ${text}`;        
    }

    res.send(result);
});

app.get("*", function (req, res) {
    res.send("Sorry. Page not found... What are you doing with your life?")
})

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});