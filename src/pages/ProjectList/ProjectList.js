import React, { Component } from 'react'
import CreateTask from '../../components/CreateTask/CreateTask';
import { withAuth } from '../../context/auth.context';
import ProjectService from '../../services/projects.service';
import Project from '../../components/Project/Project';
import CreateProject from '../../components/CreateProject/CreateProject';


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.projectService = new ProjectService();
  }

  handleLogout = () => {
    this.props.logout();
  }

  refreshState() {
    this.projectService.get().then(response => {
      this.setState({projects: response.data});
    }).catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshState();
  }

  render() {
    const {projects} = this.state;
    return (
        <div>
          <button className='btn btn-danger' onClick={this.handleLogout}>Logout</button>
          <CreateProject refreshState={() => this.refreshState()} />
          <div id="accordion">
            {projects.map((project) => {
                project.refreshState = () => this.refreshState();
                return (
                    <Project {...project} key={project.id}/>
                );
            }
          )}
          </div>

        </div>
    );
  }
}

export default withAuth(ProjectList);