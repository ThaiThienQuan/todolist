import { useCallback, useMemo, useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState(["Learn React ", "Build project"]);
  const [newTodo, setNewTodo] = useState("");
  const [search, setSearch] = useState("");
  

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
  const filtertodo = useMemo(() => {
    return todo.filter((e) =>
      `${e.todo}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [todo, search]);

  return (
    <>
      <div>
        <h1>Todo list</h1>
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={addTodo}>Add todo</button>
        <input type="text" value={search} onChange={handleChange} />
        <ul>
          {filtertodo.map((todo, i) => (
            <li key={i}>
              {todo}
              <button onClick={() => removetodo(i)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
