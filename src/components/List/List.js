
import './List.module.css'
import React from "react";


function List ({todo, setTodo}) {
    return (
        <div className={List}>
            {
                todo.map (item => (
                    <div key={item.id}>
                    <div>{item.task}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default List;