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
    const director_tag = req.session.student[0].director_tag
    const {first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs} =req.body
    db.create_order([first_name_cust, last_name_cust, phone_cust, email_cust, address_cust, flashlights, pucs, director_tag])
}
}