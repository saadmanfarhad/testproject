 var User = require('../models/user');

 exports.update = function(req, res){
   var id = req.params.id;
   User
    .update(
      {_id: id},
      {"$set": req.body})
    .exec(function(err, updateUser){
      if(err) console.log(err);
      else{
        res.json("User updated successfully");
      }
    });
 };
