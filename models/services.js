import mongoose from 'mongoose';
const schema = mongoose.Schema;

const serviceSchema = new schema({
    name: String,
    desc: String,
    img: String,
    price: Number,
    discount: Number
}, {timestamps: true});

const service = mongoose.model('service', serviceSchema);

export default service;