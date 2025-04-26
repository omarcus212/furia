import routers from "./routers/router";
const express = require('express');
const server = express();
const PORT = 3000;
const cors = require('cors')
server.use(cors());
server.use(express.json());

server.use('/api', routers);

server.listen(3000, () => {
    console.log(`servidor está rodando em http://localhost:3000/api, PORT: ${PORT}`);
})