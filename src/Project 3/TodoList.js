import React from 'react'
import classes from "./todo.module.css"
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa"

function TodoList({ todos, setEditTodo, setTodos }) {


    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
        console.log(findTodo);
    }

    const handleDelete = ({ id }) => {
        const deleteTodo = todos.filter((todo) => todo.id !== id)
        setTodos(deleteTodo)
    }

    return (
        <>
            {todos.map((todo) => {
                return <li key={todo.id} className={classes.todoList}>
                    <div>
                        {todo.title}
                    </div>
                    <div className={classes.iconWrapper}>
                        <button className={classes.buttonComplete}><FaCheckCircle /></button>
                        <button onClick={() => handleEdit(todo)} className={classes.buttonEdit}><FaEdit /></button>
                        <button onClick={() => handleDelete(todo)} className={classes.buttonDelete}><FaTrash /></button>
                    </div>
                </li>
            })}
        </>
    )
}

export default TodoList