import mongoose from 'mongoose';
const schema = mongoose.Schema;

const userSchema = new schema({
    role: {
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

const user = mongoose.model('user', userSchema);

export default user;