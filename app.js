const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const server = http.createServer(app);
const io = socketio(server);

let users = {}; // Store user locations

// Set up view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Correctly set the views directory
app.use(express.static(path.join(__dirname, 'public')));

// Socket.io events
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Send existing users' locations to the newly connected client
  socket.emit('init-locations', users);

  // Listen for location updates
  socket.on('send-location', (data) => {
    users[socket.id] = data; // Update user's location
    io.emit('receive-location', { id: socket.id, ...data }); // Broadcast to all clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    delete users[socket.id]; // Remove user from tracking
    io.emit('user-disconnected', socket.id); // Notify all clients
  });
});

// Serve the index page
app.get('/', (req, res) => {
  res.render('index'); // Render the EJS template
});

// Start the server
server.listen(3000, () => console.log('Server running on http://localhost:3000'));
