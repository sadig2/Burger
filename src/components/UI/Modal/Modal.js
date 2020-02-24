import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import BackDrop from "../BackDrop/BackDrop";
import { Component } from "react";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log("{model } will update");
  }
  render() {
    return (
      <Aux>
        <BackDrop clicked={this.props.modalClosed} show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
