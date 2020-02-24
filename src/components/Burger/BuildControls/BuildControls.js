import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const builControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price:<strong>{props.price.toFixed(2)}</strong>
    </p>

    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        substract={() => props.ingredientSubstracted(ctrl.type)}
        dis={props.disabled[ctrl.type]}
      />
    ))}

    <button
      onClick={props.order}
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      Order Now
    </button>
  </div>
);

export default builControls;
