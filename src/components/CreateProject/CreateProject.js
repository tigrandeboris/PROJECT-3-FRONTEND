import React, { Component } from 'react'
import ProjectService from '../../services/projects.service';
import './CreateProject.css'

const validators = {
  name: (value) => {
    let message;
    if(!value){
      message = "Name is required";
    }
    return message;
  }
}
export default class CreateProject extends Component {
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

    this.projectService = new ProjectService();
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields)

    this.projectService.create(this.state.fields)
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
        <div className='project-list-page'>
          <div className='add-project-input'>

            <form  onSubmit={(e) => this.handleSubmit(e)}>
              <div className="input-group mb-3">
                <input value={fields.name} onChange={(e) => this.handleChange(e)} name="name" type="text" className="form-control" placeholder="Project name" aria-label="Recipient's username"
                       aria-describedby="button-addon2"/>
                <button className="btn btn-dark" type="submit" id="button-addon2">Create Project</button>
              </div>
            </form>
          </div>
        </div>

    )
  }
}
