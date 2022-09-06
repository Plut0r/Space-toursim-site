import { NavLink } from "react-router-dom";
import classes from "./DescLink.module.css";

const DescLink = () => {
  return (
    <main className={classes.desc}>
      <h2>
        <span>01</span>Pick your destination
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/destination/moon" activeClassName={classes.active}>
              MOON
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination/mars" activeClassName={classes.active}>MARS</NavLink>
          </li>
          <li>
            <NavLink to="/destination/europa" activeClassName={classes.active}>EUROPA</NavLink>
          </li>
          <li>
            <NavLink to="/destination/titan" activeClassName={classes.active}>TITAN</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default DescLink;
