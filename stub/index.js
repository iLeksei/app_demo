const express = require("express");
const bodyParser = require("body-parser");

const agreementRouter = require("./routes/agreement");

const DEFAULT_PORT = 1414;
const api = express();

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
});

api.get("/health-check", (req, res) => {
    res.status(200).send("Alive");
})
api.use("/agreements", agreementRouter);

api.listen(DEFAULT_PORT, () => {
    console.log("Server has started on 1414 port!");
});