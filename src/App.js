import { useEffect, useState } from "react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const initTasks = async () => {
      console.log("starting useEffect");
      const tasks = await getTasks();
      setTasks(tasks);
    };

    initTasks();

    // setTasks(getTasks())
  }, []);


  const getTasks = async () => {
    const response = await fetch(`http://localhost:5000/tasks`);
    const tasks = await response.json();
    return tasks;
  };

  const postTask = async (task) => {
    console.log('postTask', task)
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const tasks = await response.json();
    return tasks;
  };

  const deleteTask = async ({ id }) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const tasks = await response.json();
    return tasks;
  };

  const toggleTaskReminder = async ({ id, reminder }) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ reminder }),
    });
    const tasks = await response.json();
    return tasks;
  };

  // manage delete task
  const removeTask = async (task) => {
    const { id } = task;
    console.log("delete", id);
    await deleteTask(task);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // add task
  const addTask = async (task) => {
    console.log("task", task);
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    await postTask({ ...task, id });
    setTasks([...tasks, { id, ...task }]);
  };

  // toggle task reminder
  const toggleTask = async (task) => {
    const { id } = task;
    console.log("toggle", task);
    await toggleTaskReminder( { ...task, reminder: !task.reminder });
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        onShowAddTask={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={addTask}></AddTask>}
      {tasks.length ? (
        <Tasks tasks={tasks} onDelete={removeTask} onToggleTask={toggleTask} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
