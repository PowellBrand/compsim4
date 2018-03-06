module.exports = {

 //Create User
 //75D, 74M
 createUser: (req,res)=>{
     const db = req.app.get('db');
     //76D
     const {name, password} = req.body
     db.createUser([name, password]).then(()=>{
        //  74L
         res.status(200).send()
     }).catch(()=> res.status(500).send())
 },

 //76E
getUser: (req, res, next)=>{
    const db = req.app.get('db');
    db.getUser().then(name =>{
        res.send(name)
    }).catch(e=> console.log(e))
},


}
