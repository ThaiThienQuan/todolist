import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) return <p className="text-gray-500 mt-4">No tasks found.</p>;

  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
