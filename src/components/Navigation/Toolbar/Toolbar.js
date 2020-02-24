import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/Navigationitems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolBar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <Navigationitems />
      </nav>
    </header>
  );
};

export default toolBar;
