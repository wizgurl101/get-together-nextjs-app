import { MongoClient } from "mongodb";

// this is an API route for creating and adding a new event to a DB by HTTP request
// there the functions here contain server-side code to talk to the DB
// the url to this file: /api/new-event

const handler = async (req, res) => {
  // POST request to add a new event
  if (req.method === "POST") {
    const newEventData = req.body;

    try {
      const client = await MongoClient.connect(process.env.MONGO_URI);
      const db = client.db();

      const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

      await collection.insertOne(newEventData);
      client.close();

      // successfully added new event to DB
      res.status(201).json({ message: "New Event Created." });
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
