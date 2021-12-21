import React from 'react'
import TodoItemComponent from './TodoItemComponent'

const TodoListComponent = ( {todos, handleDelete, handleToggle} ) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                {
                    todos.map( (todo, i) => (
                        <TodoItemComponent
                            key={todo.id}
                            index={i}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                        />
                    ))
                }
            </ul>  
        </>
    )
}

export default TodoListComponent
