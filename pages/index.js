import EventList from "../components/events/EventList";

//  dummy data
const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "First Event",
    image:
      "https://thehill.com/sites/default/files/styles/article_full/public/ca_internationalwomensday_illustration_istock.jpg?itok=hOev3rFs",
    address: "Fake Street 101, Fake City",
    description: "first event details",
  },
  {
    id: "e2",
    title: "Second Event",
    image:
      "https://thehill.com/sites/default/files/styles/article_full/public/ca_internationalwomensday_illustration_istock.jpg?itok=hOev3rFs",
    address: "Fake Street 202, Fake City",
    description: "second event details",
  },
];

const HomePage = (props) => {
  return <EventList events={props.events}>Home Page</EventList>;
};

// this function can only be used within the pages folder
// NOTE: this function will only execute during the build process
export const getStaticProps = () => {
  // this function must return an object and within that object
  // the field props will be used as the props object for this HomePage component
  return {
    props: {
      events: DUMMY_EVENTS,
    },
    // incentmental static generation which takes a number of seconds it takes
    // before regenerating this paper for each request to avoid slate data
    revalidate: 10,
  };
};

export default HomePage;
