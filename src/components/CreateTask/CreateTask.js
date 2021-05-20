import React, { Component } from 'react'
import TaskService from '../../services/tasks.service';
import './CreateTask.css'

const validators = {
  name: (value) => {
    let message;
    if(!value){
      message = "Name is required";
    }
    return message;
  }
}
export default class CreateTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        project_id: this.props.project_id,
        name: ""
      }, 
      errors: {
        name: null
      }
    }

    this.taskService = new TaskService();
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields)

    this.taskService.create(this.state.fields)
    .then(() => {
      console.log('Created');

      this.setState({
        fields: {
          name: "",
          project_id: this.props.project_id,
        }, 
        errors: {
          name: null
        }
      }, () => {
        this.props.refreshState();
      })
    })
    .catch(err => console.error(err))
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields, 
        [name]: value
      },
      errors:{
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="input-group mb-3 task-input">
          <input value={fields.name} onChange={(e) => this.handleChange(e)} name="name" type="text" className="form-control" placeholder="Task name" aria-label="Recipient's username"
                 aria-describedby="button-addon2"/>
          <button className="btn btn-dark" type="submit" id="button-addon2">Add Task</button>
        </div>
      </form>
    )
  }
}
