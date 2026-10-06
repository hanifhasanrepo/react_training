import React, { useState } from "react";

const startList = [
  "Wake up",
  "Subuh prayer",
  "Do workout",
  "Shower",
  "Eat breakfast",
];

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    try {
      // Try to read previously-saved tasks from localStorage
      const saved = localStorage.getItem("todo-tasks");
      // If present, parse JSON; else fall back to sensible defaults
      // return saved ? JSON.parse(saved) : startList;
      // Below returns the list to original state
      return startList;
    } catch {
      // If JSON parse or localStorage fails, return defaults to keep app usable
      return startList;
    }
  });

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
      // You can trigger a submit or any other action here
    }
  };

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div>
      <h2>To Do List</h2>
      <div>
        <input
          className="newtask"
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task"
        />
        <button className="add-button" onClick={addTask}>
          &#9997;
        </button>
      </div>

      <ol className="todolist">
        {tasks.map((task, index) => (
          <li key={index} className="task-box">
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              &#128078;
            </button>
            <button className="moveup-button" onClick={() => moveTaskUp(index)}>
              &#128070;
            </button>
            <button
              className="movedown-button"
              onClick={() => moveTaskDown(index)}
            >
              &#128071;
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
