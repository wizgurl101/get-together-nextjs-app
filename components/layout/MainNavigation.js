import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>GET TOGETHER</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Events</Link>
          </li>
          <li>
            <Link href="/new-event">Add New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
