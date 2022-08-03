const express = require("express"); // express imported

const server = express(); // variable calls express function

server.use(express.json()); // Makes the express understand JSON

const clients = [];


server.listen(3000); // server executed on port 3000 from localhost:3000

