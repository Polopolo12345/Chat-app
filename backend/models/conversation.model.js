import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default:[],
        },
    ],
}, {timestamps: true});

const Conversation = mongoose.Schema("User", conversationSchema);

export default Conversation;