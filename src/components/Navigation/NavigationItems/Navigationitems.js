import React from "react";
import classes from "./Navigationitems.module.css";
import Navigationitem from "./Navigationitem/Navigationitem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <Navigationitem link="/" active>
      BurgerBuilder
    </Navigationitem>
    <Navigationitem link="/" active>
      Checkout
    </Navigationitem>
  </ul>
);

export default navigationItems;
