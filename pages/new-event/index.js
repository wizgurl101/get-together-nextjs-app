import NewEventForm from "../../components/events/NewEventForm";

const NewEventPage = () => {
  const addEventHandler = () => {
    console.log("add new event");
  };

  return <NewEventForm onAddEvent={addEventHandler} />;
};

export default NewEventPage;
