import '../App.css';
import { useRequestGetTodos } from '../hooks'
import SearchForTodos from './SearchTodos';
import SortTasksAlphabetically from './SortingTasks';
import AddingTask from './AddTodo';
import ListItem from './ListItem';


function MainPage() {
    const { todos, fetchBySearchQery, fetchBySort, fetchTodos, isLoading } = useRequestGetTodos();
    console.log(todos)
    return (
        <div className='boardWrapper'>
            {isLoading ? (
                <span className="loader"></span>
            ) : (
                <div className='board'>
                    <h1> Список дел</h1>
                    <AddingTask fetchTodos={fetchTodos} />
                    <div className='SortAndSearch'>
                        <SearchForTodos fetchBySearchQery={fetchBySearchQery} />
                        <SortTasksAlphabetically fetchBySort={fetchBySort} />
                    </div>
                    {todos.length === 0 ? 'Дела не запланированы' :
                        (<ul className='todos'>
                            {todos.map(({ id, title }) =>
                                <ListItem key={id} id={id} title={title} />
                            )}
                        </ul>)
                    }

                </div>
            )}

        </div>
    )
}

export default MainPage