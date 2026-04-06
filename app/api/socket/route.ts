// Socket.io server setup

import { Server } from 'socket.io';

const io = new Server();

io.on('connection', (socket) => {
    console.log('New socket connection');
});