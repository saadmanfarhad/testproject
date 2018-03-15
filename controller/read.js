const user = require('../models/user');

exports.read = (req,res) =>{
  user.find(function(err,users){
    res.json(users);
  })
}
