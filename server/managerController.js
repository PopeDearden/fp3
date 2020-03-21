
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
  }

}