import { MongoClient } from "mongodb";
import EventList from "../components/events/EventList";

const HomePage = (props) => {
  return <EventList events={props.events}>Home Page</EventList>;
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
    const client = await MongoClient.connect(
      "mongodb+srv://wiz:root@gettogetherdb.a4h6k.mongodb.net/getTogether?retryWrites=true&w=majority"
    );

    const db = client.db();
    const getTogetherCollection = db.collection("getTogether");

    events = await getTogetherCollection.find().toArray();
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
