import React from 'react'
import classes from './TodoCard.module.css'
const TodoCard = ({ task, handleDone , handleDeleteTask }) => {
    /// '', null, false, undefined,0,
    console.log(task, 't');
    return (
        <div className={ task.completed ? `${classes.todoCard} ${classes.done}`: classes.todoCard }>
            <h3>{task.title}</h3>
            <div>
                <button className={classes.button} onClick={() => handleDone(task.id)}>Done</button>
                <button className={classes.button}  onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoCard