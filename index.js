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

server.put(
    "/clients/:index",
    checkClientExists,
    checkClientInArray,
    (req, res) => {
        const { index } = req.params; // Gets index of data

        const { name } = req.body;

        clients[index] = name; // Changes the name in the array

        return res.json(clients);
    }
);

server.delete("/clients/:index", (req, res) => {
    const { index } = req.params; // Gets index of data

    clients.splice(index, 1); // Deletes on the position

    return res.send();
});

server.listen(3000); // server executed on port 3000 from localhost:3000

function checkClientExists(req, res, next) {
    if (!req.body.email) {
        return res.status(400).json({ error: "client email is required" });
    }
    if (
        (!req.body.name )
    ) {
        return res.status(400).json({ error: "client name is required" }); // local middleware local will check if name property was informed correctly
    }
    if (!req.body.username){
        return res.status(400).json({ error: "client username is required" });
    }
    if (!req.body.password) {
        return res.status(400).json({ error: "client password is required" });
    }
        return next(); // if name was informed correctly, function next() will call next actions
}

