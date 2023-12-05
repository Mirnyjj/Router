import { useState } from "react";

export const useRequestDeletingTodos = ({fetchTodoById}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const requestDeletingTodos = (id) => {
    setIsDeleting(true);
    fetch(`http://localhost:3000/Tasks/${id}`, {
      method: 'DELETE',
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log('Задача УДАЛЕНА, ответ от сервера', response)
        fetchTodoById(id)
      })
      .finally(() => setIsDeleting(false))
  };
return {
    isDeleting,
    requestDeletingTodos,
}
}