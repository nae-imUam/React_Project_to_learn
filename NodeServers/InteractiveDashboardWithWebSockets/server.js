const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({server});

wss.on('connection', (ws) => {
    const sendRandomData = () => {
        const data = generateRandomData();
        ws.send(JSON.stringify(data));
    };
    
    const intervalId = setInterval(sendRandomData, 1000);

    ws.on('close', () => {
        clearInterval(intervalId);
    });
});

function generateRandomData() {
    return {
        value: Math.floor(Math.random()*1000),
    };
}

server.listen(8080, () => {
    console.log('WebSocket server is running on http://localhost:8080');
});

