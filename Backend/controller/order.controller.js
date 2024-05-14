import {Order} from '../model/order.model.js'
export const getAllOrders = async (req, res) => {
    try {
        // Extract user ID from request
        const userId = req.params.userId;

        // Find all orders for the given user ID
        const orders = await Order.find({ user: userId });

        res.status(200).json({ success: true, orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
};
export const placeOrder = async (req, res) => {
    try {
        // Extract necessary data from request body
        const { userId, address, phoneNumber, pinCode, product } = req.body;

        // Create new order
        const order = new Order({
            user: userId,
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
