const MongoClient = require("../mongo/client.js");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const saltRounds = 10;

module.exports = async (req, res) => {
  const client = await MongoClient();
  await client.connect();
  const db = client.db("UserInfo");

  const { method, query } = req;
  const { endpoint } = query; // Add an endpoint query parameter to handle different collections

  switch (endpoint) {
    case "check":
       if (method === "POST"){
         res.status(201).json("Yikadee");
       }
       break;
    case "register":
      // Handle user registration here
      console.log("I've made it here, to that very critical place")
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

    case "login":
      // Handle user login here
      if (method === "POST") {
        const { email, password } = req.body;
        const user = await db.collection("users").findOne({ email });

        if (!user) {
          res.status(404).json({ message: "User not found" });
        } else {
          const isPasswordCorrect = await bcrypt.compare(password, user.password);

          if (isPasswordCorrect) {
            const token = generateToken({ userId: user._id }, jwtSecret, "7d");
            res.status(200).json({ token, user: { name: user.name, email: user.email } });
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
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

    default:
      res.status(400).json({ message: "Invalid endpoint" });
      client.close();
      return;
  }

  switch (method) {
    case "GET":
      // Handle GET request for the specified collection
      let getResponse = await db.collection(endpoint).find({}).toArray();
      res.status(200).json(getResponse);
      break;

    case "POST":
      // Handle POST request for the specified collection
      const { body } = req;
      let postResponse = await db.collection(endpoint).insertOne(body);
      res.status(200).json(postResponse);
      break;

    case "DELETE":
      // Handle DELETE request for the specified collection
      const { _id } = req.body;
      let deleteResponse = await db
        .collection(endpoint)
        .deleteOne({ _id: ObjectId(_id) });
      res.status(200).json(deleteResponse);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
    client.close();
};