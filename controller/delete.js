const user = require('../models/user');

exports.delete = (req, res) =>{
  user.remove({_id: req.params.id}, function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  })
}
