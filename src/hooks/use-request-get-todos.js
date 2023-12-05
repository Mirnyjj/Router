import { useEffect, useState } from "react";

export const useRequestGetTodos = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSort, setIsLoadingSort] = useState(false);

  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    fetchTodos()
  }, []);

  const fetchTodos = () => {
    setIsLoading(true);
    fetch('http://localhost:3000/Tasks')
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
        console.log('вызов')
      })
      .finally(() => setIsLoading(false));
  }
   
  
  const fetchBySort = () => {
    setIsLoadingSort(true);
    fetch(`http://localhost:3000/Tasks?_sort=title&_order=asc`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
            setTodos(loadedTodos);
            console.log('Задачи отсортированы', loadedTodos)
        })
        .finally(() => setIsLoadingSort(false));
  }

  const fetchBySearchQery = (value) => {
    fetch(`http://localhost:3000/Tasks?title_like=${value}`)
        .then((loadedData) => loadedData.json())
        .then((loadedTodos) => {
            setTodos(loadedTodos);
            console.log('Задача найдена', loadedTodos, value)
        })
        .finally(() => value = null);
  } 

  return {
    isLoading,
    isLoadingSort,
    todos,
    fetchBySearchQery,
    fetchBySort,
    fetchTodos,
  }
}