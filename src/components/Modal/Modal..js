import React, {useState} from "react";
import classes from './Modal.module.css'
import Input from "../Input/Input";


const Modal = ({handleShow,setTodo}) => {
    const [inputValue, setInputValue] = useState('');
    const [formValues, setFormValues] = useState([]);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormValues([...formValues, inputValue]);
        setTodo((prev)=>{
            return [...prev,{id:Date.now(),task:inputValue}]
        })
        setInputValue('');
        handleShow()
    }

    return (
        <>
            <div onClick={handleShow} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <form onSubmit={handleSubmit}>

                    <Input type="text" value={inputValue} onChange={handleInputChange} />
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </>
    )
}

export default Modal;





