const express = require('express')
const app = express()
const server = require('http').createServer(app);

const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: server });

wss.on('connection', function connection(ws, request) {
    ws.on('message', function incoming(message) {
        console.log(message)

        ws.send('Tobi from thoughtbot fusion team.');
    });
});

app.get('/', (req, res) => res.send('Hello World!'))

server.listen(9000, () => console.log(`Lisening on port :9000`))