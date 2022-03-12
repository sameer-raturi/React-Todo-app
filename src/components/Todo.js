import { Fragment, useRef } from "react";
import Card from "../UI/Card";
import TaskList from "./TaskList";
import classes from "./Todo.module.css";
import { taskActions } from "../store";
import { useDispatch } from "react-redux";

let cnt = 0;
const Todo = (props) => {
  const taskInput = useRef();

  const dispatch = useDispatch();
  const toShow = props.totalQuantity > 0;
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const message = taskInput.current.value;

    if (message.trim().length <= 0) {
      return;
    }
    cnt++;

    dispatch(
      taskActions.addItemToList({
        id: cnt,
        message: message,
        isChecked: false
      })
    );
    // setStorage();
    taskInput.current.value = "";
  };

  return (
    <Fragment>
      <Card>
        <form className={classes.addtask} onSubmit={formSubmitHandler}>
          <span>
            <input type="text" ref={taskInput} />
          </span>

          <span>
            <button type="submit">
              <h2>Add Task</h2>
            </button>
          </span>
        </form>
      </Card>

      {toShow && (
        <Card>
          <TaskList tasks={props.tasks} />
        </Card>
      )}
    </Fragment>
  );
};

export default Todo;
