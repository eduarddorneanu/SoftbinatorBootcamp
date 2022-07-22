import React from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {

    const handleClick = (event) => {
        console.log(event.target.checked);
    }

    return <li 
        className={styles.TodoItem}
        style={{
            color: props.color
        }}
    >
        <input type="checkbox" onClick={handleClick}  />
        <span>{props.action} - {props.times} times</span>
    </li>
};

export default TodoItem;