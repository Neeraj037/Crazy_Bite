import mongoose from "mongoose";

// Define a schema for the order
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    product: {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
},{
    timestamps:true
});

// Create a model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
