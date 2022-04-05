import Head from "next/head";
import { MongoClient } from "mongodb";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Get Together - Home</title>
        <meta
          name="description"
          content="Browse through a list of happening event in your city today!"
        />
      </Head>
      <EventList events={props.events}>Home Page</EventList>
    </>
  );
};

// this function can only be used within the pages folder
// NOTE: this function will only execute during the build process
// this function must return an object and within that object
// the field props will be used as the props object for this HomePage component
export const getStaticProps = async () => {
  // because this function does not execute on client side, able to write server side code to
  // fetch data from DB
  // no need to use fetch to send a request within our app
  let events = [];

  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    events = await collection.find().toArray();
    client.close();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      events: events.map((event) => ({
        id: event._id.toString(),
        title: event.title,
        address: event.address,
        image: event.image,
      })),
    },
    // incentmental static generation which takes a number of seconds it takes
    // before regenerating this paper for each request to avoid slate data
    revalidate: 10,
  };
};

export default HomePage;
