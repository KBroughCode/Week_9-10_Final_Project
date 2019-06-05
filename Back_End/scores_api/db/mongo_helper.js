const MongoClient = require("mongodb").MongoClient;
ObjectID = require("mongodb").ObjectID;
const DB_NAME = "casino";
const HOST = "mongodb://localhost:27017";

class MongoHelper {
  static get(coll) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.find().toArray();
    });
  }

    static delete(coll, id) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      console.log('Collection = ' , collection);
      return collection.deleteOne({ _id: ObjectID(id) });
    });
  }

  static create(coll, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.insertOne(payload);
    });
  }

  static update(coll, id, payload) {
    // Connect using the connection string
    return MongoClient.connect(
      HOST,
      { useNewUrlParser: true }
    ).then(client => {
      const collection = client.db(DB_NAME).collection(coll);
      return collection.updateOne({ _id: ObjectID(id) }, { $set: payload });
    });
  } 
}

module.exports = MongoHelper;
