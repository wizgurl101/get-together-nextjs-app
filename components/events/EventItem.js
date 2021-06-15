import Card from "../UI/Card";
import classes from "./EventItem.module.css";

const EventItem = () => {
  return (
    <li className={classes.image}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
};

export default EventItem;
