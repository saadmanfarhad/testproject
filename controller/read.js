const user = require('../models/user');

exports.read = (req,res) =>{
  user.find(function(err,users){
    console.log("GET called");
    res.json(users);
  })
}
