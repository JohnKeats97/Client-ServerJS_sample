// #include section
const express = require("express");
const path = require("path");
const body = require("body-parser");
const all_modules = require("./Modules/all_modules.js");

// Basic Server Setup
const DATA = path.resolve("../client/");
const app = express();
const PORT = 8080;

app.use(express.static(DATA));
app.use(body.json());

app.get("/", function(req, res)
{
    let index = DATA + "index.html";
    res.sendFile(index);
});

app.post("/sum", function(req, res)
{
    let val_1 = + req.body.first;
    let val_2 = + req.body.secound;

    res.status(201);
    res.json({answer: all_modules.sum(val_1,val_2)});
});

app.post("/multiplication", function(req, res)
{
    let val_1 = + req.body.first;
    let val_2 = + req.body.secound;

    res.status(201);
    res.json({answer: all_modules.mul(val_1,val_2)});
});

app.post("/min", function(req, res)
{
    let val_1 = + req.body.first;
    let val_2 = + req.body.secound;

    res.status(201);
    res.json({answer: all_modules.min(val_1,val_2)});
});

app.post("/max", function(req, res)
{
    let val_1 = + req.body.first;
    let val_2 = + req.body.secound;

    res.status(201);
    res.json({answer: all_modules.max(val_1,val_2)});
});


app.listen(PORT);
console.log("Server launched");