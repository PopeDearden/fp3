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
        await res.status(200).send(req.session.student[0])
}
}