const express = require("express");
const fs = require("fs");
const path = require("path");

const agreementRouter = express.Router();

agreementRouter.get("/", (req,res) => {
    console.log("GET: /agreements/");
    const stubJson = JSON.parse(fs.readFileSync(path.join(__dirname + "/data/agreements_stub.json"), "utf-8"));
    return res.json(stubJson);
});

module.exports = agreementRouter;