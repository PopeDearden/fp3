module.exports = {
    checkStudent: async (req, res) => {
        console.log('checking for student')
        const db = req.app.get('db')
        if (req.session.student) {
            const user_id = req.session.student[0].user_id
            const confirmed = await db.get_student_stage([user_id])
            req.session.student[0].confirmed = confirmed[0].confirmed
            res.status(200).send(req.session.student)
        }
        else {
            res.status(200).send('no student')
            console.log('no student found')
        }
    },
    checkStudentStage: async (req,res) => {
        console.log(req.session.student[0].confirmed)
        confirmed =req.session.student[0].confirmed
        res.status(200).send(confirmed)
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
    getSamples: async(req, res) => {
        const db= req.app.get('db')
        console.log('looking for samples ' + req.session.student[0])
        const {user_id} = req.session.student[0]
        const samples = await db.get_samples([user_id])
        res.status(200).send(samples)
    },
createOrder: (req,res) => {
    const db = req.app.get('db')
    const date = new Date()
    const delivered = false
    const user_id = req.session.student[0].user_id
    const director_tag = req.session.student[0].director_tag
    const archived = false
    const {first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, collected, confirmed, order_placed, order_sent, flashlight_yellow, puc_black, good_flash, good_puc} =req.body
    console.log(flashlight_yellow, puc_black)
    db.create_order([first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag, date, user_id,collected, confirmed, order_placed, order_sent, archived, delivered, flashlight_yellow, puc_black, good_flash, good_puc])
    res.status(200).send('Created Order')
},
getStudentInProgressOrders: async(req, res) => {
    console.log('looking for in progress orders')
    const db = req.app.get('db')
    const user_id = req.session.student[0].user_id
    const orders = await db.get_student_in_progress_orders([user_id])
    res.status(200).send(orders)
},
getStudentCollectedOrders: async(req, res) => {
    console.log('looking for collected orders')
    const db = req.app.get('db')
    const user_id = req.session.student[0].user_id
    const orders = await db.get_student_collected_orders([user_id])
    res.status(200).send(orders)
},
getStudentConfirmedOrders: async(req, res) => {
    console.log('looking for confirmed orders')
    const db = req.app.get('db')
    const user_id = req.session.student[0].user_id
    const orders = await db.get_student_confirmed_orders([user_id])
    const total = await db.get_student_final_totals([user_id])
    res.status(200).send([orders, total[0]])
},
getOneOrder: async (req, res)  => {
    console.log('getting one order')
    console.log(req.params.id)
    const db = req.app.get('db')
    const user_id = +req.session.student[0].user_id
    const id = +req.params.id
    const oneOrder = await db.get_one_order([user_id, id])
    res.status(200).send(oneOrder)
},
updateOrder: async (req, res) => {
    console.log('updating order')
    const db = req.app.get('db')
    const {first_name_cust, 
        last_name_cust, 
        phone_cust, 
        email_cust, 
        address_cust, 
        flashlights,
        flashlight_yellow, 
        pucs, 
        collected, 
        confirmed, order_id} =req.body
    const user_id = req.session.student[0].user_id
       
        db.edit_order([order_id, first_name_cust, 
            last_name_cust, 
            phone_cust, 
            email_cust, 
            address_cust, 
            flashlights,
            pucs, 
            collected, 
            user_id, flashlight_yellow])
            res.status(200).send('Updated order')
}
}