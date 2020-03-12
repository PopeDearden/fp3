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
            sample_puc_black} = req.body

        const username = first_name + last_name
        db.create_user([first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black,
            req.session.director[0].tag, username])
        res.status(200).send('Created Student Account')
    },
    getInProgress: async (req, res) => {
        console.log('hit director in progress')
        const db= req.app.get('db')
        const director_tag = req.session.director[0].tag
        const inProgress = await db.get_director_in_progress([director_tag])
        console.log('I found ' + inProgress)
        res.status(200).send(inProgress)
    },
    getConfirmed: async (req, res) => {
        console.log('hit director orders confirmed')
        const db= req.app.get('db')
        const director_tag = req.session.director[0].tag
        const confirmed = await db.get_director_confirmed([director_tag])
        console.log('I found ' + confirmed)
        res.status(200).send(confirmed)
    },
    getStudents: async (req, res) => {
        console.log('getting students')
        const db = req.app.get('db')
        const director_tag = req.session.director[0].tag
        const students = await db.get_students([director_tag])
        res.status(200).send(students)
    },
    logOut: (req, res) => {
        req.session.destroy()
        // console.log(req.session.director)
        console.log('destroying session')
        res.status(200).send('Logged out')
    }
}