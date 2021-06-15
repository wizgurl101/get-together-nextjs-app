import EventList from "../components/events/EventList";
import EventItem from "../components/events/EventItem";

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

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <EventList events={DUMMY_EVENTS}>Home Page</EventList>
    </>
  );
};

export default HomePage;
