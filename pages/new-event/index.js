import Head from "next/head";
import { useRouter } from "next/router";
import NewEventForm from "../../components/events/NewEventForm";

const NewEventPage = () => {
  const router = useRouter();

  const addEventHandler = async (enteredEventData) => {
    try {
      // send a request to the new-event js file in the api folder
      const response = await fetch("/api/new-event", {
        method: "POST",
        body: JSON.stringify(enteredEventData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Get Together - Add new event</title>
        <meta
          name="description"
          content="Add a new event to get together with new and old friends in your city."
        />
      </Head>
      <NewEventForm onAddEvent={addEventHandler} />
    </>
  );
};

export default NewEventPage;
