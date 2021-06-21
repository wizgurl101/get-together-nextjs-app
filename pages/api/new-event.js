import { MongoClient } from "mongodb";

// this is an API route for creating and adding a new event to a DB by HTTP request
// there the functions here contain server-side code to talk to the DB
// the url to this file: /api/new-event

const handler = async (req, res) => {
  // POST request to add a new event
  if (req.method === "POST") {
    const newEventData = req.body;

    try {
      // NOTE: this code will not end up on client side
      const client = await MongoClient.connect(
        "mongodb+srv://user:root@gettogetherdb.a4h6k.mongodb.net/getTogether?retryWrites=true&w=majority"
      );

      const db = client.db();

      const getTogetherCollection = db.collection("getTogether");

      await getTogetherCollection.insertOne(newEventData);
      client.close();

      // successfully added new event to DB
      res.status(201).json({ message: "New Event Created." });
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
