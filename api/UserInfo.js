const MongoClient = require("../mongo/client.js");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  console.log("Function started");
  
  try {
    const client = await MongoClient();
    await client.connect();
    const db = client.db("UserInfo");
  
    const { method, query } = req;
    const { endpoint } = query;
  
    console.log(`Endpoint: ${endpoint}`);
  
    switch (endpoint) {
      case "check":
        console.log("Entering check case");
        if (method === "POST") {
          res.status(201).json("Yikadee");
        }
        break;
      case "register":
        console.log("Entering register case");
        if (method === "POST") {
          const { name, email, password } = req.body;
          const existingUser = await db.collection("users").findOne({ email });
  
          if (existingUser) {
            res.status(409).json({ message: "Email already exists" });
          } else {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = await db.collection("users").insertOne({
              name,
              email,
              password: hashedPassword,
            });
  
            const token = generateToken({ userId: newUser.insertedId }, jwtSecret, "7d");
  
            res.status(201).json({ token, user: { name, email } });
          }
        } else {
          res.status(405).end(`Method ${method} Not Allowed`);
        }
        break;
  
      // ... rest of the cases
  
      default:
        res.status(400).json({ message: "Invalid endpoint" });
        client.close();
        return;
    }
  
    // ... rest of the code
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    console.log("Function finished");
  }
};
