import { Fragment } from "react";
import { useDispatch } from "react-redux";
import classes from "./Task.module.css";
import { taskActions } from "../store";

const Task = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(taskActions.removeItemFromList(props.id));
  };

  const toggleCheckBoxHandler = () => {
    dispatch(taskActions.toggleCheckbox(props.id));
  };

  let applyStyle = "";
  if (props.isChecked) {
    applyStyle = `${classes.bar}  ${classes.strike}`;
  } else {
    applyStyle = `${classes.bar}`;
  }

  return (
    <Fragment>
      <div className={classes.task}>
        <input
          type="checkbox"
          onClick={toggleCheckBoxHandler}
          checked={props.isChecked}
        />
        <div className={applyStyle}>{props.message}</div>
        <button onClick={deleteItemHandler}>Delete</button>
      </div>
    </Fragment>
  );
};

export default Task;
