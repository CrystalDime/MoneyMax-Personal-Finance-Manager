import { MongoClient, ServerApiVersion } from 'mongodb';
import { ObjectId } from 'mongodb';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

const username = encodeURIComponent('devontay');
const password = encodeURIComponent('eluett');
const uri = `mongodb+srv://${username}:${password}@moneymax.1edvk23.mongodb.net/?retryWrites=true&w=majority`;
console.log(username);
console.log(password);






const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("UserInfo").collection("users");
  // perform actions on the collection object
  client.close();
});

const UserInfo = async (req, res) => {
  console.log("Function started");
  
  try {
    await client.connect(); // Modify this line
    const db = client.db("UserInfo");
  
    const { method, query } = req;
    const { endpoint } = query;
  
    console.log(`Endpoint: ${endpoint}`);
    console.log(method);
    console.log(req);
    switch (endpoint) {
      case "check":
        console.log("Entering check case");
        if (method === "GET") {
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

export default UserInfo