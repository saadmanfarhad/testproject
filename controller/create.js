const user = require('../models/user');

exports.create = (req, res) =>{
  let newUser = new user({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone: req.body.phone
  })

  newUser.save((err, user)=>{
    if(err){
      res.json({msg: 'Failed to create user'+ err});
    }
    else{
      console.log('User added successfully');
      res.json(user);
    }
  })
}
