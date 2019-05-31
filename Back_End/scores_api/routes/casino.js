var express = require('express');
var router = express.Router();
const MongoHelper = require ('../db/mongo_helper.js');

/* GET a listing. */


// 'http://localhost:3000/api/casino/scores'

router.get('/scores', function(req, res) {
  MongoHelper.get("scores").then(results => {
    res.status(200).json(results);
});
});

/* create a new post */
router.post("/scores",function(req,res){
  MongoHelper.create("scores",req.body).then(results => {
    res.status(201).json("New Post created");
  });
});

// /* delete a post */
// router.delete("/:id",function(req,res){
//   MongoHelper.delete(req.params.id).then(results => {
//     res.status(201).json("Post deleted");
//   });
// });
/* update a post */
// router.put("/:id",function(req,res){
//   MongoHelper.update(req.params.id,req.body).then(results => {
//     res.status(201).json("Post updated");
//   });
// });

module.exports = router;
