// Song management endpoints

import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';

export async function GET() {
    const db = await connectToDatabase();
    const songs = await db.collection('songs').find({}).toArray();
    return NextResponse.json(songs);
}

export async function POST(request) {
    const songData = await request.json();
    const db = await connectToDatabase();
    await db.collection('songs').insertOne(songData);
    return NextResponse.json({ message: 'Song created' });
}

export async function DELETE(request) {
    const { id } = await request.json();
    const db = await connectToDatabase();
    await db.collection('songs').deleteOne({ _id: id });
    return NextResponse.json({ message: 'Song deleted' });
}
