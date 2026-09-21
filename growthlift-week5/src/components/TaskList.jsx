import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask
} from "../api/tasksApi";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const loadTasks = () => {
    getTasks()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error("Error loading tasks:", err);
      });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    try {
      await createTask({
        title: inputValue
      });

      setInputValue("");
      loadTasks();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div>
      <h2>My Tasks</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter task"
        />

        <button type="submit">
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}

            <button onClick={() => handleDelete(task._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;