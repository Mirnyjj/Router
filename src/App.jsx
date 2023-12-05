import './App.css';
import MainPage from './components/MainPageTodos';
import { Navigate, Route, Routes } from 'react-router-dom';
import TodoPage from './components/TodoPage';
import NotFoundTodo from './components/NotFoundPageTodo';


function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:id' element={<TodoPage />} />
      <Route path='/404' element={<NotFoundTodo />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  );
}


export default App
