import { useState } from "react";

export default function Todolist() {
  const [inputValue, setinputValue] = useState("");
  const [task, settask] = useState(["fbhedkjfb", "èhudshf"]);
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  const addTodo = () => {
    settask([...task, inputValue.trim()]);
    setinputValue("");
  };
  const deleteTask = (i) => {
   const newtodo= task.filter((_, it) => it !== i);
    settask(newtodo);
  };
  return (
    <>
      <div className="container mt-5">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Add task"
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <ul>
        {task.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => deleteTask(i)}></button>
          </li>
        ))}
      </ul>
    </>
  );
}
