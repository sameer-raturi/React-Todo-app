import Task from "./Task";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  const data = props.tasks.map((task) => (
    <li key={task.id}>
      <Task id={task.id} message={task.message} isChecked={task.isChecked} />
    </li>
  ));

  return (
    <div className={classes.tasks}>
      <ul>{data}</ul>
    </div>
  );
};

export default TaskList;
