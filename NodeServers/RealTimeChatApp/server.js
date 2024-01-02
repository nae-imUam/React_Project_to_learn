const WebSocket = require('ws');
const http = require('http');
const { log } = require('console');

const server = http.createServer();
const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            if(client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(3001, () => {
    console.log('WebSocket server is listening on port 3001');
});