import { useState } from "react";

export const useRequestUpdateTodos = ({ fetchTodoById}) => {
  const [isUpdating, setIsUpadating] = useState(false);

  const requestUpdateTodos = (id, newText) => {
    setIsUpadating(true);
    fetch(`http://localhost:3000/Tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: newText,
      })
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Задача изменена, ответ от сервера', response)
        fetchTodoById(id)
      })
      .finally(() => setIsUpadating(false))
  };
return {
    isUpdating,
    requestUpdateTodos,
}
}