import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import './Signup.css';
import Navbar from '../../components/Navbar/Navbar';


const validators = {
  username: (value) => {
    let message;
    if(!value){
      message = 'Username is required';
    }

    return message;
  },
  email: (value) => {
    let message;
    if(!value){
      message = 'Email is required';
    }
    return message;
  },

  password: (value) => {
    let message;
    if(!value){
      message = 'Password is required';
    } else if(value.length < 3){
      message = 'Invalid password'
    }
    return message;
  },
}

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      fields: {
        username: "",
        email: "",
        password: ""
      },
      errors: {
        username: null,
        email: null,
        password: null
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.fields);
    this.props.signup(this.state.fields);
  }

  handleChange(event){
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value)
      }
    })
  }

  render() {
    const { fields } = this.state;
    return (
        <div>
          <div className="form-signin signup-form">
            <form onSubmit={(event) => this.handleSubmit(event)}>

              <h1 className="h3 mb-3 fw-normal">Please Signup</h1>

              <div className="form-floating username-input">
                <input required name="username" value={fields.username} onChange={(e) => this.handleChange(e)} type="text" className="form-control"
                       id="floatingInput" placeholder="username"/>
                <label htmlFor="floatingInput">Username</label>
              </div>

              <div className="form-floating username-input">
                <input required name="email" value={fields.email} onChange={(e) => this.handleChange(e)} type="text" className="form-control"
                       id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email</label>
              </div>

              <div className="form-floating username-input">
                <input required name="password" value={fields.password} onChange={(e) => this.handleChange(e)} type="password" className="form-control"
                       id="floatingInput" placeholder="Password"/>
                <label htmlFor="floatingInput">Password</label>
              </div>

              <button className="w-100 btn btn-lg btn-dark login-button" type="submit">Signup</button>
              <div className="sign-in-up-anchor">
                <a href="/login">Already have an account? Login!</a>
                <br/>
                <a href="/">Go to Homepage</a>
              </div>

              <p className="mt-5 mb-3 text-muted"> &copy; 2021</p>
            </form>
          </div>
        </div>

    )
  }
}

export default withAuth(Signup);