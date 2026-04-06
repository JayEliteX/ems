// Real-time studio session endpoints

import { NextResponse } from 'next/server';
import { Server } from 'socket.io';
import { createServer } from 'http';

const httpServer = createServer();
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

export async function GET() {
    return NextResponse.json({ message: 'Studio session is live' });
}
