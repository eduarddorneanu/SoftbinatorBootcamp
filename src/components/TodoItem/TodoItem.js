import React from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = ({color, onClick, action, times}) => {

    const handleClick = (event) => {
        console.log(event.target.checked);
    }

    return <li 
        className={styles.TodoItem}
        style={{
            color: color
        }}
        onClick={onClick}
    >
        <input type="checkbox" onClick={handleClick}  />
        <span>{action} - {times} times</span>
    </li>
};

export default TodoItem;