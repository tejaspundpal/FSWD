const express = require('express');

const routingCompont = express.Router();
const verifying = require('../middleware/verification');

routingCompont.get("/", verifying, (req, res) => {
    res.send("This is the get request ");
})
routingCompont.get("/about", (req, res) => {
    res.send("This is the about ");
})
// This the commet
routingCompont.post("/onehand", async (req, res) => {
    try {
        const body = req.body;

        console.log(body);
        res.send({ message: "The body you send is", body });
    } catch (e) {
        console.log("The error is", e);
    }
});
routingCompont.put("/thisPutRequest", (req, res) => {
    res.send({ message: "This is the put request" });
})

module.exports = routingCompont;