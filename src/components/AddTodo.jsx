/* eslint-disable react/prop-types */
import { useState } from "react";
import { useRequestAddTodos } from "../hooks";
import './AddTodo.css'
import AddIcon from '@mui/icons-material/Add';


function AddingTask({ fetchTodos }) {
    const [text, setText] = useState('')
    const { isCreating, requestAddTodos } = useRequestAddTodos({ fetchTodos });


    const onChange = ({ target }) => {
        setText(target.value)
    }


    return (
        <div className="AddTodoStyle">
            <input className="InputAdd"
                name='todo'
                type='text'
                placeholder='Введите новую задачу'
                value={text}
                onChange={onChange}
            />
            <button className="ButtonAdd" disabled={isCreating} onClick={() => requestAddTodos(text)} >
                <AddIcon />
            </button>
        </div>
    )
}

export default AddingTask