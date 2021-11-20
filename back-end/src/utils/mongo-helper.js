const { MongoClient } = require('mongodb');
require('dotenv').config()

const user = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_COLLECTION;
const uri = `mongodb+srv://${user}:${password}@cluster0.3ajpn.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const insertWord = (word) => {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      let dbo = client.db(dbName);
      dbo.collection(collectionName).insertOne(word, function (err, res) {
        if (err) {
          reject(err)
        }
        client.close();
        resolve('Added to queue')
      });
    });
  });
}

const fetchAllWord = () => {
  return new Promise((resolve, reject)=>{
    client.connect((err) => {
      let dbo = client.db(dbName);
      try {
        dbo.collection(collectionName).find({}).toArray(function (err, result) {
          if (err) throw err;
          client.close();
          resolve(result);
        });
      }
      catch (err) {
        reject(err)
        client.close();
      }
    });
  })
 
  console.log('2');
}

module.exports = {
  fetchAllWord,
  insertWord
}