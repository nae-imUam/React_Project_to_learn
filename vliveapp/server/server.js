const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const activeClients = {};
const ipToClientIdMap = {}; // New mapping to track IP addresses to client IDs

io.on('connection', (socket) => {
  console.log('a user connected');

  // Listen for user information from the client
  socket.on('userInfo', (userInfo) => {
    const { ip, location } = userInfo;

    // Check if the IP address already has a client ID
    if (ipToClientIdMap[ip]) {
      // If yes, disconnect the previous connection
      const previousClientId = ipToClientIdMap[ip];
      io.to(previousClientId).emit('disconnectClient');
      delete activeClients[previousClientId];
    }

    // Generate a new client ID
    const clientId = socket.id;

    // Store user information and client ID
    activeClients[clientId] = {
      id: clientId,
      ip: ip,
      location: location,
    };
    
    // Update the IP to client ID mapping
    ipToClientIdMap[ip] = clientId;

    // Broadcast the updated list of active clients to all clients
    io.emit('activeClients', Object.values(activeClients));

    // Log the number and list of active clients on the server side
    console.log('Number of active clients:', Object.keys(activeClients).length);
    console.log('List of active clients:');
    Object.values(activeClients).forEach(client => {
      console.log(`ID: ${client.id}, IP: ${client.ip}, Location: ${client.location}`);
    });
  });

  // Listen for video stream from the client
  socket.on('videoStream', ({ video, id }) => {
    // Process the video data as needed
    // For example, you can broadcast it to other clients
    io.emit('videoStream', { video, id });
    
    // Optionally, log information about the received video stream
    console.log(`Received video stream from client with ID ${id}`);
  });

  // Rest of your server code...
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
