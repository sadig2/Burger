import React from "react";
import classes from "./DrawerToggle.module.css";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    Menu
  </div>
);

export default drawerToggle;
