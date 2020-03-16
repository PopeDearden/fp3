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
    }
}