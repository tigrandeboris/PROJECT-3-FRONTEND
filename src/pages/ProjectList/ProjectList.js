import React, { Component } from 'react'
import CreateTask from '../../components/CreateTask/CreateTask';
import Task from '../../components/Task/Task';
import { withAuth } from '../../context/auth.context';
import TaskService from '../../services/tasks.service'
import Navbar from '../../components/Navbar/Navbar';


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.taskService = new TaskService();
    // this.refreshState = this.refreshState.bind(this);
  }

  refreshState() {
    this.taskService.get()
      .then(response => {
        console.log(response.data);
        this.setState({ tasks: response.data });
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  displayTasks(){
    const { tasks } = this.state;
    return tasks.map(task => {
      return (
        <Task refreshState={() => this.refreshState()} key={task.id} {...task}/>
      )
    })
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <Navbar />
        <div onClick={this.handleLogout}>Logout</div>
        <div className="card">
          {
            this.displayTasks()
          }
          <CreateTask refreshState={() => this.refreshState()} />
        </div>
      </div>
    )
  }
}

export default withAuth(ProjectList);