import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        tuit: String,
        likes: Number,
        liked: Boolean,
        topic: String,
        userName: String,
        handle: String,
        time: String,
        image: String,
        title: String,
        dislike: Number,
        disliked: Boolean,
        replies: Number,
        retuits: Number
    }, {collection: 'tuits'});
export default schema;