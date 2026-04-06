// JWT token creation and verification

import jwt from 'jsonwebtoken';

export function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET);
}

export function verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}