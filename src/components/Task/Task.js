import React from 'react'
import TaskService from '../../services/tasks.service'

export default function Task({ name, done, priority, id, refreshState }) {
  const taskService = new TaskService();
  const deleteTodo = () => {
    taskService.deleteOne(id)
      .then(() => {
        console.log('Deleted');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  const updateDone = () => {

    taskService.updateOne(id, { done: !done })
      .then(() => {
        console.log('Updated');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  const updatePriority = () => {
    taskService.updateOne(id, { priority: !priority })
      .then(() => {
        console.log('Updated');
        refreshState();
      })
      .catch(err => console.error(err))
  }

  return (
      <div>
        <button onClick={() => updateDone()}>{done ? "Deshacer todo" : "Marcar como realizado"}</button>
        <div>{name}</div>
        <button onClick={() => updatePriority()}>{priority ? "Marcar como no prioritario" : "Marcar como prioritario"}</button>
        <button onClick={() => deleteTodo()}>Eliminar</button>
      </div>
  )
}
