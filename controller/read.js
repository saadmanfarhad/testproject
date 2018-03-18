const user = require('../models/user');

exports.read = (req,res) =>{
  user.find(function(err,users){
    console.log("GET called: Return all users");
    res.json(users);
  });
}

exports.readUser = (req, res) =>{
  id = req.params.id;
  user.findOne({_id: id}, function(err, user){
    console.log("GET called: Return single user");
    console.log(user);
    res.json(user);
  });
}
