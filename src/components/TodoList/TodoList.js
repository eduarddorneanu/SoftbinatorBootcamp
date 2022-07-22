import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import "./TodoList.css";

const TodoList = () => {
    return (
        <ul className='TodoList'>
            <TodoItem color="#FF0000" action="Go to town hall" times={3} />
            <TodoItem color="#00FF00" action="Do groceries" times={2} />
            <TodoItem color="#0000FF" action="Go to gym" times={1} />
        </ul>
    )
}

export default TodoList;