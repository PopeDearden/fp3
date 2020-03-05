module.exports = {
    createDirector: (req, res) => {
        console.log('creating director')
        const db = req.app.get('db')
        const { first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password } = req.body
        const director = db.create_director([first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password])

        res.status(200).send(director)
    },
    getDirector: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body
        console.log('looking for ' + email)
        console.log('looking for ' + password)
        const directorInfo = await db.find_director([email, password])

        console.log(directorInfo)
        req.session.director = directorInfo
        console.log(req.session.director)
        await res.status(200).send(req.session.director)
    },
    checkDirector: (req, res) => {
        console.log('checking for director')
        console.log(req.session.director[0] !== undefined)
        if (req.session.director) {
            res.status(200).send(req.session.director)
        }
        else {
            res.status(200).send('no director')
        }
    },
    createUser: (req, res) => {
        console.log('adding tag' + req.session.director[0].tag
        )
        const db = req.app.get('db')
        const { first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black } = req.body
        db.create_user([first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black,
            req.session.director[0].tag])
        res.status(200).send('Created Student Account')
    }
}