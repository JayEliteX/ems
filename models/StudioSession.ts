// Mongoose StudioSession schema

import mongoose from 'mongoose';

const StudioSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    songId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Song' },
    startTime: { type: Date, default: Date.now },
});

export default mongoose.models.StudioSession || mongoose.model('StudioSession', StudioSessionSchema);