module.exports = {
    getSampleOrders: async (req, res) => {
        const db = req.app.get('db')
        const orders = await db.get_sample_orders()
        console.log(orders)
        res.status(200).send(orders)
    }
}