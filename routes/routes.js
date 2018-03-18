var express = require('express');
var router = express.Router();

const create = require('../controller/create');
const read = require('../controller/read');
const update = require('../controller/update');
const del = require('../controller/delete');

router.get('/', (req, res)=> res.end('Hello world from server!'));
router.post('/create', (req, res)=>{
  create.create(req, res);
});

router.get('/read', (req, res)=>{
  read.read(req, res);
});

router.get('/read/:id', (req, res)=>{
  read.readUser(req, res);
});

router.put('/update/:id', (req, res)=>{
  update.update(req, res);
});

router.delete('/delete/:id', (req, res)=>{
  del.delete(req, res);
});

router.get('/lol', (req,res) =>{
  console.log("LOL Called");
})

module.exports = router;
