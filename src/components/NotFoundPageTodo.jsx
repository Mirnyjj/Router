import { useNavigate } from "react-router-dom"
import '../App.css'

function NotFoundTodo() {
    const navigate = useNavigate()
    navigate('/404')
    return (
        <div className='boardWrapper'>
            <div className='board'>
                <div className='error'>
                    Такая страница не существует, ошибка 404
                </div>
            </div>
        </div>
    )
}
export default NotFoundTodo
