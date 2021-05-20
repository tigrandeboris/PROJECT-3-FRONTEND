import React from 'react'
import TaskService from '../../services/tasks.service'
import './Task.css'

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

  markAsDone(){
    this.taskService.updateOne(this.props.id, { done: !this.props.done })
    .then(() => {
      console.log('Updated');
      this.props.refreshState();
    })
    .catch(err => console.error(err))
  }

  editName() {
    const name = prompt('Change Task Name', this.props.name);
    if (!name) {
      return;
    }
    this.taskService.updateOne(this.props.id, { name: name })
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
        <div className='tasks-div'>
          <div className='task-name-div'>
            <div>{this.props.name}</div>
          </div>
          <div className='tasks-buttons-div'>
            <button className='task-button' onClick={() => this.markAsDone()}>{this.props.done ? <i className="fas fa-check-square fa-done"></i>  : <i className="fas fa-check-square fa-not-done"></i>}</button>
            <button className='task-button' onClick={() => this.togglePriority()}>{this.props.priority ? <i className="fas fa-star h-priority"></i> : <i className="fas fa-star l-priority"></i>}</button>
            <button className="task-button" onClick={() => this.editName()}><i className="fas fa-edit edit-icon"></i></button>
            <button className='task-button' onClick={() => this.deleteTask()}><i className="fas fa-times fa-delete"></i></button>
          </div>
        </div>
    )
  }


}
