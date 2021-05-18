import React, { Component } from 'react'
import TaskService from '../../services/tasks.service';

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
          name: ""
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
        <input type="text" value={fields.name} onChange={(e) => this.handleChange(e)} name="name" />
        
        <button type="submit">
          Add task
        </button>
      </form>
    )
  }
}
