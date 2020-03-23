module.exports = {
    createDirector: async (req, res) => {
        console.log('creating director')
        const db = req.app.get('db')
        const { first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password, black_flash_sample, yellow_flash_sample, yellow_puc_sample, black_puc_sample, sample_processed } = req.body
        console.log(sample_processed)
        await db.create_director([first_name, last_name, email, phone, school_name, school_street, school_city, school_state, school_zip, tag, stage, password, black_flash_sample, yellow_flash_sample, yellow_puc_sample, black_puc_sample, sample_processed])
        res.status(200).send('Created Director')
    },
    getStage: (req, res) => {
        console.log(req.session.director)
        res.status(200).send(req.session.director)
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
    checkDirector: async (req, res) => {
        const db = req.app.get('db')
        console.log('checking for director')
        if (req.session.director) {
            console.log('found director, now updating stage')
            const stageInfo = await db.get_stage([req.session.director[0].tag])
            req.session.director[0].stage = stageInfo[0].stage
            res.status(200).send(req.session.director)
        }
        else {
            res.status(200).send('no director')
        }
    },
    createUser: async(req, res) => {
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
        const checktag = req.session.director[0].tag
        const username = first_name + last_name
        const test = await db.check_if_user_exists([username, checktag])
     
        if(test[0] === undefined) {
            await db.create_user([first_name,
                last_name,
                 password,
                 sample_light_black,
                 sample_light_yellow,
                 sample_puc_yellow,
                 sample_puc_black,
                 req.session.director[0].tag, username])
                 res.status(200).send('Created Student Account')
                } else {
                    res.status(200).send('User Already Exists')
        }
        
    },
    getInProgress: async (req, res) => {
        console.log('hit director in progress')
        const db= req.app.get('db')
        const director_tag = req.session.director[0].tag
        const inProgress = await db.get_director_in_progress([director_tag])
        console.log('I found ' + inProgress)
        res.status(200).send(inProgress)
    },
    getCollected: async (req, res) => {
        console.log('hit director orders collected')
        const db= req.app.get('db')
        const director_tag = req.session.director[0].tag
        const collected= await db.get_director_collected([director_tag])
        console.log('I found ' + collected)
        res.status(200).send(collected)
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
    getStudentTotals: async(req, res) => {
        console.log('getting student totals')
        const db = req.app.get('db')
        const user_id = req.params.id
        const totals = await db.get_student_totals([user_id])
        res.status(200).send(totals)
    },
    updateStudentOrderConfirm: async (req, res) => {
        console.log('updating confirmed status')
        const db = req.app.get('db')
        const user_id = req.params.id
        await db.update_order_student_confirmed([user_id])
        res.status(200).send('updated records')
        
    },
    updateStudentOrderUnConfirm: async (req, res) => {
        console.log('updating confirmed status')
        const db = req.app.get('db')
        const user_id = req.params.id
        await db.update_order_student_unconfirmed([user_id])
        res.status(200).send('updated records')
        
    },
    getDirectorSamples: async (req, res) => {
        console.log('getting director samples')
        const db = req.app.get('db')
        const tag = req.session.director[0].tag
        const samples = await db.get_director_samples([tag])
        const given = await db.get_given_samples([tag])
        res.status(200).send({samples, given})
    },
    createFinal: async (req,res) => {
        const db = req.app.get('db')
        const tag = req.session.director[0].tag
        const {black_flashlights, yellow_flashlights, yellow_pucs} = req.body
        const date = new Date()
        console.log(black_flashlights, yellow_flashlights, yellow_pucs, tag)
        await db.create_final_order([black_flashlights, yellow_flashlights, yellow_pucs, tag, date])
        res.status(200).send('created order')
        // await req.session.destroy()
    },
    getStudentInfo: async (req, res) => {
        const db = req.app.get('db')
        const tag = req.session.director[0]
        const students = await db.get_student_info([tag])
        res.status(200).send(students)
    },
    getStudent: async (req, res) => {
        console.log('getting student to update')
        const db = req.app.get('db')
        const id = req.params.id
        const student = await db.get_student_by_id([id])
        res.status(200).send(student)
    },
    updateStudent: async (req, res) => {
        console.log('updating student')
        const db = req.app.get('db')
        const id = req.params.id
        const { first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black} = req.body
            const username = first_name + last_name
        await db.update_student([first_name,
            last_name,
            password,
            sample_light_black,
            sample_light_yellow,
            sample_puc_yellow,
            sample_puc_black, username, id])
            res.status(200).send('Updated Student')
    },
    getInvoice: async (req, res) => {
        const db = req.app.get('db')
        const tag = req.session.director[0].tag
        const invoice = await db.get_director_invoice([tag])
        res.status(200).send(invoice)
    },
    logOut: (req, res) => {
        req.session.destroy()
        // console.log(req.session.director)
        console.log('destroying session')
        res.status(200).send('Logged out')
    }
}