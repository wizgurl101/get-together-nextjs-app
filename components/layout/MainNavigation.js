import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Get Together</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Events</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
