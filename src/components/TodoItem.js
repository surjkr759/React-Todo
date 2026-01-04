function TodoItem({todo, onToggle}) {
    return (
        <div>
            <input 
            type="checkbox" 
            checked={todo.isCompleted} 
            onChange={() => onToggle(todo.id)}
            />
            <span 
                style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none"
                }}
            > {todo.text}</span>
            <span>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default TodoItem;