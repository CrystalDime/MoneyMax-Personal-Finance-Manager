const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://deluett1@gmail.com@moneymax.1edvk23.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = async () => {
  if (!client.isConnected()) await client.connect();
  return client;
}
