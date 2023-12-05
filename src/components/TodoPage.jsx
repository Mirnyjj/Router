/* eslint-disable react/prop-types */
import { useRequestDeletingTodos, useRequestUpdateTodos } from '../hooks'
import { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckIcon from '@mui/icons-material/Check';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import '../App.css'
import './ListItem.css'
import { useNavigate, useParams } from 'react-router-dom';
import NotFoundTodo from './NotFoundPageTodo';


// eslint-disable-next-line react/prop-types
function TodoPage() {
    const [isEditMode, setIsEditMode] = useState(false);
    const [newText, setNewText] = useState('')
    const { id } = useParams();
    const [caseMap, setCaseMap] = useState([])
    const navigate = useNavigate()

    const fetchTodoById = async (id) => {
        const todoResponse = await fetch(`http://localhost:3000/Tasks/${id}`)
        const todoResult = await todoResponse.json()
        setCaseMap(todoResult);

    }

    console.log(caseMap)

    const { isUpdating, requestUpdateTodos } = useRequestUpdateTodos({ fetchTodoById });
    const { isDeleting, requestDeletingTodos } = useRequestDeletingTodos({ fetchTodoById });


    useEffect(() => {
        fetchTodoById(id)
    }, []);

    const { title } = caseMap;

    if (!title) {
        return <NotFoundTodo />
    }

    const onChange = ({ target }) => {
        setNewText(target.value)
    }

    const onOpenUpdateTask = () => setIsEditMode(true);
    const onCloseUpdateTask = () => setIsEditMode(false);


    return (
        <div className='boardWrapper'>
            <div className='board'>
                <h1>{`Карточка дела №${id}`}</h1>
                <ul className='todos'>
                    <li key={id} id={id} className='todosItem'>
                        {isEditMode ?
                            <>
                                <input
                                    name='todo'
                                    type='text'
                                    placeholder={title}
                                    value={newText}
                                    onChange={onChange}
                                />
                                <button disabled={isUpdating} className='ButtonReady' onClick={() => { requestUpdateTodos(id, newText), onCloseUpdateTask() }}>
                                    <CheckIcon />
                                </button>
                            </>

                            : <>
                                {title}
                                <button className='ButtonEdit' disabled={isUpdating && isEditMode} onClick={onOpenUpdateTask}>
                                    <EditNoteIcon />
                                </button>
                                <button className='ButtonDelete' disabled={isDeleting && isEditMode} onClick={() => { requestDeletingTodos(id), navigate('/', { replace: true }) }}>
                                    <DeleteOutlineIcon />
                                </button>
                            </>
                        }
                    </li>
                </ul>
                <button className='ButtonBack' onClick={() => navigate(-1)}>
                    <KeyboardBackspaceIcon />
                </button>
            </div>
        </div>

    )
}
export default TodoPage