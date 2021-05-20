import React, { Component } from 'react'
import './ProjectList.css'
import { withAuth } from '../../context/auth.context';
import ProjectService from '../../services/projects.service';
import Project from '../../components/Project/Project';
import CreateProject from '../../components/CreateProject/CreateProject';
import TaskImg from '../../images/undraw_To_do_re_jaef.svg';


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
          <div className='h1-div'>
            <h1 className='projects-h1'>My Projects</h1>
          </div>
          <div className='project-list-div'>
            <div>
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
            <div>
              <img className='project-list-img' src={TaskImg} alt=""/>
            </div>
          </div>
        </div>

    );
  }
}

export default withAuth(ProjectList);