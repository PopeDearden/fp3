
module.exports = {
// login manager
    getManager: async (req, res)=> {
      const db = req.app.get('db')
      const {email, password} = req.body
      console.log('looking for ' + email)
      console.log('looking for ' + password)
      const managerInfo = await db.find_manager([email, password])
      
      await res.status(200).send(managerInfo[0])
        console.log(managerInfo)
      req.session.manager = {managerInfo}
      console.log(req.session.manager.managerInfo)
  },
//   Check if manager is logged in
  checkManager: (req,res) => {
      console.log('checking for manager')
      console.log(req.session.manager)
      if(req.session.manager.managerInfo){
          res.status(200).send(req.session.manager.managerInfo)
      }
      else{
          res.status(200).send('no manager')
      }
  },
  logout: (req, res) => {
      req.session.destroy()
      res.status(200).send('logged out')
  },

}