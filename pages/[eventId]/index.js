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
    const client = await MongoClient.connect(
<<<<<<< HEAD
      "mongodb+srv://wonderwoman:hello@cluster0.net/gettogether"
=======
      "mongodb+srv://user:root@gettogetherdb.a4h6k.mongodb.net/getTogether?retryWrites=true&w=majority"
>>>>>>> 000cfc038c0136f74079ba2c4e8a3967490c5ea7
    );

    const db = client.db();
    const getTogetherCollection = db.collection("getTogether");

    eventArray = await getTogetherCollection.find({}, { _id: 1 }).toArray();
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
    const client = await MongoClient.connect(
      "mongodb+srv://hnxh2.mongodb.net/gettogether?retryWrites=true&w=majority"


    const db = client.db();
    const getTogetherCollection = db.collection("someDatabase");

    selectedEvent = await getTogetherCollection.findOne({
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
