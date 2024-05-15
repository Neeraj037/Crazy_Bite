import {Order} from '../model/order.model.js'
import mongoose from 'mongoose';
export const getAllOrders = async (req, res) => {
    try {
        // Extract user ID from request
        const userId= req.params.id;
        console.log(userId);
        const objectId = new mongoose.Types.ObjectId(userId);
        // Find all orders for the given user ID
        const orders = await Order.find({user:objectId});

        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
};
export const placeorder = async (req, res) => {
    console.log(req.body);
    try {
        // Extract necessary data from request body
        const { user, address, phoneNumber, pinCode, product } = req.body;
       
        // Create new order
        const order = new Order({
            user: user,
            address,
            phoneNumber,
            pinCode,
            product
        });

        // Save the order to the database
        await order.save();

        res.status(201).json({ success: true, message: 'Order placed successfully', order });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ success: false, message: 'Failed to place order' });
    }
};
