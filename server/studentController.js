module.exports = {
    checkStudent: (req, res) => {
        console.log('checking for student')
        if (req.session.student) {
            res.status(200).send(req.session.student)
        }
        else {
            res.status(200).send('no student')
            console.log('no student found')
        }
    },
    getStudent: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        console.log('looking for ' + username)
        console.log('looking for ' + password)
        const studentInfo = await db.find_student([username, password])
        req.session.student = studentInfo
        console.log(req.session.student)
        await res.status(200).send(req.session.student)
},
createOrder: (req,res) => {
    const db = req.app.get('db')
    const date = new Date()
    const delivered = false
    const user_id = req.session.student[0].user_id
    const director_tag = req.session.student[0].director_tag
    const archived = false
    const {first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, collected, confirmed, order_placed, order_sent} =req.body
    db.create_order([first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id,collected, confirmed, order_placed, order_sent, archived, delivered])
    res.status(200).send('Created Order')
},
getStudentInProgressOrders: async(req, res) => {
    console.log('looking for in progress orders')
    const db = req.app.get('db')
    const user_id = req.session.student[0].user_id
    const orders = await db.get_student_in_progress_orders([user_id])
    res.status(200).send(orders)
}
}