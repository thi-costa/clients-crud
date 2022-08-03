const express = require("express"); // express imported

const server = express(); // variable calls express function

server.use(express.json()); // Makes the express understand JSON

const clients = [];

server.get("/clients", (req, res) => {
    return res.json(clients);
}); // Route to list clients

server.get("/clients/:index", (req, res) => {
    return res.json(req.user);
});

server.post("/clients", checkClientExists, (req, res) => {
    const { email, name, username, password } = req.body; // Name in the request

    clients.push(name);

    return res.json(clients); // Returns clients variable information
});


server.listen(3000); // server executed on port 3000 from localhost:3000

