import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggleTask }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => {
        onToggleTask(task);
      }}
    >
      <h3>
        {task.text}
        <FaTimes
          onClick={() => onDelete(task)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
