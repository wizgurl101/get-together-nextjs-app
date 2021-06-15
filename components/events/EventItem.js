import { useRouter } from "next/router";
import Card from "../UI/Card";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  // next router have methods for redirection to other pages of the app
  const router = useRouter();

  const showEventDetailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showEventDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;
