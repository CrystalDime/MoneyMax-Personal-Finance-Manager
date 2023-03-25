const MongoClient = require("../mongo/client.js");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  console.log("Function started");
  return;
 
};
