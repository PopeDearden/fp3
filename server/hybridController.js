module.exports = {
    getSampleOrders: async (req, res) => {
        const db = req.app.get('db')
        const orders = await db.get_sample_orders()
        res.status(200).send(orders)
    },
    getOneSample: async (req, res) => {
        console.log('getting one sample')
        const db = req.app.get('db')
        const tag = req.params.id
        const order = await db.get_one_sample([tag])
        res.status(200).send(order)
    },
    updateInvoice: async( req, res) => {
        db = req.app.get('db')
        url = req.body[0]
        tag = req.body[1]
        date = new Date()
        await db.create_invoice([tag, url, date])
        await db.mark_processed([tag])
        res.status(200).send('updated invoice')
    },
    getInvoices: async (req, res) => {
        db = req.app.get('db')
        const invoices = await db.get_invoice()
        res.status(200).send(invoices)
    },
    getFinal: async (req, res) => {
        db = req.app.get('db')
        const orders = await db.get_new_finals()
        res.status(200).send(orders)
    },
    getOneFinal: async (req, res) => {
        console.log('hit get one final order')
        console.log(req.params.id)
        db = req.app.get('db')
        const order = await db.get_one_final([req.params.id])
        console.log(order)
        res.status(200).send(order)
    },
    updateOrderSent: async(req, res) => {
        db = req.app.get('db')
        console.log(req.body)
        const url = req.body[0]
        const date = new Date()
        await db.update_order_sent([req.params.id, url, date])
        res.status(200).send('updated order')
    }
}