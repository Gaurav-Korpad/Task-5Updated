import React, { useEffect, useState } from 'react'
import classes from "./todo.module.css"
import { v4 as uuidv4 } from 'uuid';

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

    // console.log(todos);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const updateTodo = (title, id) => {
        const newTodo = todos.map((todo) => todo.id === id ? { id, title } : todo)
        console.log(newTodo);
        setTodos(newTodo)
        setEditTodo("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editTodo) {
            updateTodo(input, editTodo.id)
        } else {
            setTodos([...todos, { id: uuidv4(), title: input }])
            setInput("")
        }
    }



    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [editTodo])



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter a Todo...'
                    onChange={handleChange}
                    className={classes.todoInput}
                    value={input}
                />
                <button type='submit' className={classes.todoButton}>{editTodo ? "Update" : "Add"}</button>
            </form>
        </>
    )
}

export default Form