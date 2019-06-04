use casino;
db.dropDatabase();

db.scores.insertMany([
  {
    name: "Janet",
    score: 12
  },
  {
    name: "John",
    score:18
  }
]);
