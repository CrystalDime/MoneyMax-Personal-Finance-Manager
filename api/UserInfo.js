









export default function UserInfo (req, res) {
  console.log("Function started");
  
  try {
   
    const { method, query } = req;
    const { endpoint } = query;
  
    

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
         
  
          if (existingUser) {
            res.status(409).json({ message: "Email already exists" });
          } else {
            // Modify this line

          }
        } else {
          res.status(405).end(`Method ${method} Not Allowed`);
        }
        break;
  
      // ... rest of the cases
  
      default:
        res.status(400).json({ message: "Invalid endpoint" });
       
        return;
    }
  
    // ... rest of the code
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    console.log("Function finished");
  }
  return;
};

