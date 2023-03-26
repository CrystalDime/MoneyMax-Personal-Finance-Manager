const { MongoClient } = require('mongodb');
const { ObjectId } = require("mongodb");


const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

const uri = "mongodb+srv://deluett1@gmail.com:Nanaosaki12@moneymax.1edvk23.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default UserInfoFunc = async (req, res) => {
  console.log("Function started");
  
  try {
    await client.connect(); // Modify this line
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
            // Modify this line
            const newUser = await db.collection("users").insertOne({
              name,
              email,
              password: password,
            });
  
            const token = "token"
  
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
