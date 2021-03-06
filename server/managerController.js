
module.exports = {
// login manager
    getManager: async (req, res)=> {
      const db = req.app.get('db')
      const {email, password} = req.body
      console.log('looking for ' + email)
      console.log('looking for ' + password)
      const managerInfo = await db.find_manager([email, password])
      
      console.log(managerInfo)
      req.session.manager = managerInfo
      console.log(req.session.manager)
      await res.status(200).send(req.session.manager)
  },
  getDirectors: async (req, res) => {
    const db = req.app.get('db')
    console.log('getting directors')
    const directors = await db.get_all_directors()
    res.status(200).send(directors)

  },
//   Check if manager is logged in
  checkManager: (req, res) => {
      console.log('checking for manager')
      console.log(req.session.manager)
      res.status(200).send(req.session.manager)
  },
  logout: (req, res) => {
      req.session.destroy()
      res.status(200).send('logged out')
  },
  createManager: (req, res) => {
    console.log('creating manager')
    const db = req.app.get('db')
    const {first_name, last_name, email, phone, password} = req.body
    db.create_manager([first_name, last_name, email, phone, password])
   
    res.status(200).send('Created Manager')
  },
  getCollectedTotals: async (req, res) => {
    console.log('getting totals')
    const db = req.app.get('db')
    const collected = await db.get_scott_daily_total_collected()
    res.status(200).send(collected)
  },
  getDirector: async (req, res) => {
    console.log('getting director by id')
    const db = req.app.get('db')
    const id = +req.params.id
    console.log(id)
    const info = await db.get_director_by_id([id])
    const sample = await db.get_sample_history([info[0].tag])
    res.status(200).send([info, sample])
  },
  updateDirector: async (req, res) => {
    console.log('updating director')
    const db = req.app.get('db')
    const id = +req.params.id
    const {first_name,
      last_name,
      email,
      phone,
      school_name,
      school_street,
      school_city,
      school_state,
      school_zip,
      tag,
      password,
      black_flash_sample,
      yellow_flash_sample,
      yellow_puc_sample,
      black_puc_sample} = req.body
      await db.update_director([first_name,
        last_name,
        email,
        phone,
        school_name,
        school_street,
        school_city,
        school_state,
        school_zip,
        tag,
        password,
        black_flash_sample,
        yellow_flash_sample,
        yellow_puc_sample,
        black_puc_sample, id])
        res.status(200).send('Updated Director')
  },
  newRequest: async(req,res) => {
    const db = req.app.get('db')
    const id = +req.params.id
    const {first_name,
      last_name,
      email,
      phone,
      school_name,
      school_street,
      school_city,
      school_state,
      school_zip,
      tag,
      password,
      black_flash_sample,
      yellow_flash_sample,
      yellow_puc_sample,
      black_puc_sample,
      black_flashlights,
      yellow_flashlights,
      yellow_pucs,
      comment} = req.body
      const total_black_flash = black_flash_sample + black_flashlights
      const total_yellow_flash = yellow_flash_sample + yellow_flashlights
      const total_yellow_puc = yellow_puc_sample + yellow_pucs
      date = new Date()
      await db.update_director([first_name,
        last_name,
        email,
        phone,
        school_name,
        school_street,
        school_city,
        school_state,
        school_zip,
        tag,
        password,
        total_black_flash,
        total_yellow_flash,
        total_yellow_puc,
        black_puc_sample, id])
      await db.create_sample_history([tag, date, comment, black_flashlights, yellow_flashlights, yellow_pucs])
      await db.sample_processed_to_false([id])
      res.status(200).send('Request Sent')
    },
  getSummary: async (req, res) => {
    console.log('getting summaries collected')
    const db = req.app.get('db')
    const collected = await db.get_directors_collected_summary()
    const confirmed = await db.get_directors_confirmed_summary()
    const directors = await db.get_all_directors()
    res.status(200).send({directors, collected, confirmed})
  },
  getSummaries: async (req, res) => {
    const db = req.app.get('db')
    const id = +req.params.id
    const collected = await db.get_summary_collected([id])
    const confirmed = await db.get_summary_confirmed([id])
    const in_progress = await db.get_summary_in_progress([id])
    const info = await db.get_director_info([id])
    const remaining = await db.get_remaining_samples_director_id([id])
    res.status(200).send({collected, confirmed, in_progress, info, remaining})
  }
}