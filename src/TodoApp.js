//import React,{useState, useEffect} from "react";//
import React, { useState, useEffect } from 'react';

function TodoAPP(){
    const [todos, setTodos] =useState(()=>{
        const saved =localStorage.getItem('todos');

      return saved ? JSON.parse(saved) :[];  
    });

    const [input, setInput] =useState('');
    const [editID, setEditId] =useState(null);

    // save todos to localstorage

    useEffect(() =>{
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);

    const handleAdd =() =>{
        if (input.trim()=='') return;

        if (editID !== null) {
            setTodos(todos.map(todo => todo.id === editID ? { ...todo, text: input } : todo));
            setEditId(null);
        } else {
            setTodos([...todos, { id: Date.now(), text: input }]);
        }

        setInput('');

    };
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    const handleEdit = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setInput(todoToEdit.text);
        setEditId(id);
    };
    const reverseCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a todo"
            />
            <button onClick={handleAdd}>{editID !== null ? "Update" : "Add"}</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => reverseCompleted(todo.id)}>
                            {todo.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={() => handleEdit(todo.id)}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default TodoAPP;