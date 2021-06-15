import NewEventForm from "../../components/events/NewEventForm";

const NewEventPage = () => {
  const addEventHandler = () => {
    console.log("add new event");
  };

  return (
    <>
      <h1>New Event Page</h1>
      <NewEventForm onAddEvent={addEventHandler} />
    </>
  );
};

export default NewEventPage;
