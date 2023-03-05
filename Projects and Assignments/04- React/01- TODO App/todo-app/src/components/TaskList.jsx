import TaskItem from "./TaskItem";
// import styles from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className={tasks}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
