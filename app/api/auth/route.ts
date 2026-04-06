// Authentication endpoints

import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectToDatabase } from '../../../lib/db';

export async function POST(request) {
    const { email, password } = await request.json();
    const db = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        return NextResponse.json({ token });
    }
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}

export async function signup(request) {
    const { email, password } = await request.json();
    const db = await connectToDatabase();
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.collection('users').insertOne({ email, password: hashedPassword });
    return NextResponse.json({ message: 'User created' });
}

export async function refresh(request) {
    // Logic for refreshing token
}
