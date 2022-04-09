const OrderedProducts = require('../models/OrderedProducts');
const Orders = require('../models/Orders');
const { getCurrentDate } = require('../utils');

const getAllOrders = async (userId) => {
    const allOrders = await Orders.find({});

    const filteredOrders = allOrders.filter((order) => order.userId === userId)
    return filteredOrders;
}

// function putOrders(orderId, data) {
//     return Orders.updateOne({ _id: orderId }, data)
// }

const getProductsByOrderId = async (orderId) => {
    const allProducts = await OrderedProducts.find({});
    const filteredProducts = allProducts.filter((product) => product.orderId === orderId);
    return filteredProducts;
}

const createOrder = (order) => {
    const { orderId, userId, orderTotal, data } = order;

    const orders = new Orders({
        orderId,
        userId,
        createdDate: getCurrentDate(),
        orderTotal,
        status: "In Progress",
    }).save();

    const orderedProducts = data.map((obj) => {
        const { _id, ...orderObj } = obj;
        return new OrderedProducts({ ...orderObj, productId: _id, orderId }).save()
    })

    return orderedProducts;
}

module.exports = {
    getAllOrders,
    // putOrders,
    createOrder,
    getProductsByOrderId,
}