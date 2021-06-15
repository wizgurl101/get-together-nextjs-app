import EventDetail from "../../components/events/EventDetail";

const EventDetailPage = (props) => {
  return (
    <EventDetail
      image={props.eventData.image}
      title={props.eventData.title}
      address={props.eventData.address}
      description={props.eventData.description}
    />
  );
};

export const getStaticPaths = () => {
  return {
    // setting fallback to false means that all supportive paths contain all the params
    // values in its path.
    fallback: false,
    paths: [
      {
        params: {
          eventId: "e1",
        },
      },
    ],
  };
};

export const getStaticProps = (context) => {
  //  fetch data for a single event

  const eventId = context.params.eventId;

  return {
    props: {
      eventData: {
        id: eventId,
        image:
          "https://thehill.com/sites/default/files/styles/article_full/public/ca_internationalwomensday_illustration_istock.jpg?itok=hOev3rFs",
        title: "First Event",
        address: "101 Fake Street, Fake City",
        description: "Event description",
      },
    },
  };
};

export default EventDetailPage;
