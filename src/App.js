import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "food shopping",
      day: new Date().toJSON(),
      reminder: true,
    },
    {
      id: 2,
      text: "clothes shopping",
      day: new Date().toJSON(),
      reminder: false,
    },
    {
      id: 3,
      text: "tools shopping",
      day: new Date().toJSON(),
      reminder: true,
    },
  ]);

  // manage delete task
  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle task reminder
  const toggleTask = (id) => {
    console.log("toggle", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggleTask={toggleTask}/>
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
