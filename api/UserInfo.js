import { MongoClient, ServerApiVersion } from 'mongodb';
import { ObjectId } from 'mongodb';

const username = encodeURIComponent('devontay');
const password = encodeURIComponent('eluett');
const uri = `mongodb+srv://${username}:${password}@moneymax.1edvk23.mongodb.net/?retryWrites=true&w=majority`;
console.log(username);
console.log(password);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

export default async function UserInfo(req, res) {
  console.log("Function started");
  
  try {
    await client.connect();
    const db = client.db("UserInfo");

    const { method, query } = req;
    const { endpoint } = query;

    console.log(`Endpoint: ${endpoint}`);

    switch (endpoint) {
      case "check":
        case "check":
          console.log("Entering check case");
          if (method === "GET") {
            res.status(201).json("Yikadee");
          }
          break;

      case "login":
        // Handle user login here
        if (method === "POST") {
          const { email, password } = req.body;
          const user = await db.collection("users").findOne({ email });

          if (!user) {
            res.status(404).json({ message: "User not found" });
          } else {
            const isPasswordCorrect = password === user.password;

            if (isPasswordCorrect) {
              const token = "token";
              res.status(200).json({user._id});
            } else {
              res.status(401).json({ message: "Invalid credentials" });
            }
          }
        } else {
          res.status(405).end(`Method ${method} Not Allowed`);
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
            const hashedPassword = password;
            const newUser = await db.collection("users").insertOne({
              name,
              email,
              password: hashedPassword,
            });

            const token = "";
            res.status(201).json({ token, user: { name, email } });
          }
        } else {
          res.status(405).end(`Method ${method} Not Allowed`);
        }
        break;

      case "users":
        // Handle user-related operations here
        break;

      case "incomes":
        // Handle income-related operations here
        break;

      case "expenses":
        // Handle expense-related operations here
        break;

      case "savings_goals":
        // Handle savings goal-related operations here
        break;
      case "fetch_dashboard_data":
        if (method === "GET") {
          const { userId } = req.query;
          console.log("here")
          // Fetch incomes
          const incomes = await db
            .collection("incomes")
            .find({ userId: new ObjectId(userId) })
            .toArray();

          // Fetch expenses
          const expenses = await db
            .collection("expenses")
            .find({ userId: new ObjectId(userId) })
            .toArray();

          // Fetch savings goals
          const savingsGoals = await db
            .collection("savings_goals")
            .find({ userId: new ObjectId(userId) })
            .toArray();

          res.status(200).json({ incomes, expenses, savingsGoals });
        } else {
          res.status(405).end(`Method ${method} Not Allowed`);
        }
        break;

      default:
        res.status(400).json({ message: "Invalid endpoint" });
        client.close();
        return;
    }

   
      
      client.close();
  } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ message: "Internal server error" });
  } finally {
      console.log("Function finished");
 }
};
      
    
      
      
      
      
      