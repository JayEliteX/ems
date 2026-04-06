// Mongoose Song schema

import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    lyrics: { type: String },
});

export default mongoose.models.Song || mongoose.model('Song', SongSchema);