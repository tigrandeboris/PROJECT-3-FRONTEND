import React, { Component } from 'react'
import { withAuth } from '../../context/auth.context';
import './login.css';



const validators = {
  username: (value) => {
    let message;
    if(!value){
      message = 'Username is required';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: ""
      },
      errors: {
        username: null,
        password: null
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.fields);
    this.props.login(this.state.fields);
  }

  handleChange(event) {
    const {name, value} = event.target;
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
          <div className="form-signin login-form">

            <form onSubmit={(event) => this.handleSubmit(event)}>

              <h1 className="h3 mb-3 fw-normal">Please Login</h1>

              <div className="form-floating username-input">
                <input required name="username" value={fields.username} onChange={(e) => this.handleChange(e)} type="text" className="form-control"
                       id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Username</label>
              </div>
              <div className="form-floating">
                <input required name="password" value={fields.password} onChange={(e) => this.handleChange(e)} type="password" className="form-control"
                       id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"/> Remember me
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-dark login-button" type="submit">Login</button>
              <div className="sign-in-up-anchor">
                <a href="/signup">Don't have an account? Signup!</a>
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
export default withAuth(Login);

