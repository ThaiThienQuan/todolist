import { useCallback, useEffect, useMemo, useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState([]);
  const [loading, setloading] = useState(true);
  const [newTodo, setNewTodo] = useState({
    id: "",
    job: "",
    checked: true,
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("data.json")
    .then((response) => response.json())
    .then((data)=>{
      setTodo(data)
      setloading(false);
    })
  }, []);

  const removetodo = (i) => {
    const newtodos = todo.filter((_, it) => it !== i);
    setTodo(newtodos);
  };
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodo([newTodo.trim(), ...todo]);
      setNewTodo("");
    }
  };
  const handleChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  return (
    <>
      <div>
        <h1>Todo list</h1>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={addTodo}>Add todo</button>
        <ul>
          {todo.map((todo, i) => (
            <li key={i}>
              {todo.id} - {todo.job}- {todo.checked?"Done":"Not done"}
              <button onClick={() => removetodo(i)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
