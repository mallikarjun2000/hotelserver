import mongoose from 'mongoose';
const schema = mongoose.Schema;

const serviceCustSchema = new schema({
    custid: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        reqired: true
    },
    rating: {
        type: Number,
        required: true
    }

}, {timestamps: true});

const serviceCust = mongoose.model('serviceCust', serviceCustSchema);

export default serviceCust;