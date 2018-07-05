import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disableInfo={props.disableInfo[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
