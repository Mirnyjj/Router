import { useState } from "react";

export  const useRequestAddTodos = ({fetchTodos}) => {
    const [isCreating, setIsCreating] = useState(false);

    const requestAddTodos = (text) => {
        setIsCreating(true);
        fetch('http://localhost:3000/Tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify({
            title: text,
          })
        })
          .then((rawResponse) => rawResponse.json())
          .then((response) => {
            fetchTodos();
            console.log('Задача добавлена, ответ от сервера', response)
          })
          .finally(() => setIsCreating(false))
    }

      return {
        isCreating,
        requestAddTodos,
      }
  };

