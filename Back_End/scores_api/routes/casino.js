var express = require('express');
var router = express.Router();
const MongoHelper = require ('../db/mongo_helper.js');

/* GET a listing. */
router.get('/scores', function(req, res) {
  MongoHelper.get("scores")
  .then(results => {
    const newArray = [...results].sort((a, b) => {
      const scoreA = a.score;
      const scoreB = b.score;
      return scoreB - scoreA;
   })
   res.status(200).json(newArray);
    });
});

/* create a new post */
router.post("/scores",function(req,res){
  MongoHelper.create("scores",req.body).then(results => {
    res.status(201).json("New Post created");
  });
});

module.exports = router;
