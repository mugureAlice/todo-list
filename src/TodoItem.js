function TodoItem({ todo, onToggle }) {
    return (
      <li
        onClick={() => onToggle(todo.id)}
      >
        {todo.title}
      </li>
    );
  }
  
  export default TodoItem;