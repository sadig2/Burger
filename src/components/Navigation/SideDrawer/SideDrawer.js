import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/Navigationitems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <Navigationitems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
