export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  const data = localStorage.getItem('todos');
  return data ? JSON.parse(data) : [];
};
