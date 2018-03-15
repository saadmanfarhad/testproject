var express = require('express');
var router = express.Router();

const create = require('../controller/create');
const read = require('../controller/read');
const update = require('../controller/update');
const delete = require('../controller/delete');

router.post('/create', (req, res)=>{
  create.create(req, res);
});

router.get('/read', (req, res)=>{
  read.read(req, res);
});

router.put('/update', (req, res)=>{
  update.update(req, res);
});

router.delete('/delete', (req, res)=>{
  delete.delete(req, res);
});
