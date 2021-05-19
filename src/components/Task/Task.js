import React from 'react'
import TaskService from '../../services/tasks.service'

export default class Task extends React.Component{
  taskService = new TaskService();

  deleteTask() {
    this.taskService.deleteOne(this.props.id)
      .then(() => {
        console.log('Deleted');
        this.props.refreshState();
      })
      .catch(err => console.error(err))
  }

 /* const updateDone = () => {

    taskService.updateOne(id, { done: !done })
      .then(() => {
        console.log('Updated');
        refreshState();
      })
      .catch(err => console.error(err))
  }*/

  markAsDone(){
    this.taskService.updateOne(this.props.id, { done: !this.props.done })
    .then(() => {
      console.log('Updated');
      this.props.refreshState();
    })
    .catch(err => console.error(err))
  }

  togglePriority() {
    this.taskService.updateOne(this.props.id, { priority: !this.props.priority })
    .then(() => {
      console.log('Updated');
      this.props.refreshState();
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
        <div>
          <div>{this.props.name}</div>
          <button onClick={() => this.markAsDone()}>{this.props.done ? "DONE" : "NOT DONE"}</button>

          <button onClick={() => this.togglePriority()}>{this.props.priority ? "Marc as high priority" : "Marc as low priority"}</button>
          <button onClick={() => this.deleteTask()}>Delete</button>
        </div>
    )
  }


}
