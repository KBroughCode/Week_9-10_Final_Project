var express = require('express');
var router = express.Router();
const MongoHelper = require ('../db/mongo_helper.js');

/* GET a listing. */
router.get('/', function(coll,req, res) {
  MongoHelper.get(coll).then(results => {
    res.status(200).json(results);
});
});

/* create a new post */
router.post("/",function(coll,req,res){
  MongoHelper.create(coll,req.body).then(results => {
    res.status(201).json("New Post created");
  });
});

/* create a new post */
router.delete("/:id",function(coll,req,res){
  MongoHelper.delete(coll,req.params.id).then(results => {
    res.status(201).json("Post deleted");
  });
});
/* update a post */
router.put("/:id",function(coll,req,res){
  MongoHelper.update(coll,req.params.id,req.body).then(results => {
    res.status(201).json("Post updated");
  });
});

module.exports = router;
