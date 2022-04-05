import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import EventDetail from "../../components/events/EventDetail";

const EventDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.eventData.title}</title>
        <meta name="description" content={props.eventData.description} />
      </Head>
      <EventDetail
        image={props.eventData.image}
        title={props.eventData.title}
        address={props.eventData.address}
        description={props.eventData.description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  let eventArray = [];

  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    eventArray = await collection.find({}, { _id: 1 }).toArray();
    client.close();
  } catch (error) {
    console.error(error);
  }

  return {
    // setting fallback to false means that all supportive paths contain all the params
    // values in its path.
    fallback: false,
    paths: eventArray.map((event) => ({
      params: { eventId: event._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  let selectedEvent = null;

  try {
    const client = await MongoClient.connect(process.env.MONGO_URI);

    const db = client.db();
    const collection = db.collection(process.env.MONGO_COLLECTION_NAME);

    selectedEvent = await collection.findOne({
      _id: ObjectId(eventId),
    });

    if (selectedEvent === null) {
      throw new Error("No Event Found");
    }

    client.close();
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      eventData: {
        id: selectedEvent._id.toString(),
        title: selectedEvent.title,
        address: selectedEvent.address,
        image: selectedEvent.image,
        description: selectedEvent.description,
      },
    },
  };
};

export default EventDetailPage;
