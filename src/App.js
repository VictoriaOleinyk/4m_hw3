import Modal from "./components/Modal/Modal.";
import { useState} from "react";
import Container from "./components/Container/Container";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import List from "./components/List/List";
import Input from "./components/Input/Input";



function App() {

    const [isShow, setIsShow ] = useState(false)

    const [todo, setTodo] = useState([
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ])



    const handleShow = () => {
        setIsShow(!isShow)
        console.log(isShow, 'isShow')
    }

  return (
    < >
        <Container>
            <div className={classes.wrapper}>
                <Input/>
                { isShow && <Modal setTodo={setTodo}  handleShow={handleShow} />}
                <Button handleClick={handleShow}><p>Добавить</p></Button>
                <List todo={todo} setTodo={setTodo}/>
            </div>
        </Container>

    </>
  );
}

export default App;
