import React from 'react'
import ProjectService from '../../services/projects.service';
import Task from '../Task/Task';
import TaskService from '../../services/tasks.service';
import CreateProject from '../CreateProject/CreateProject';
import CreateTask from '../CreateTask/CreateTask';

export default class Project extends React.Component{
  projectService = new ProjectService();
  taskService = new TaskService();

  constructor(props) {
      super(props);
      this.state = props;
  }

    refreshState() {
        this.projectService.getOne(this.props.id)
        .then((response) => {
            const  project = response.data;
            console.log(project)
            this.setState({id: project.id, name: project.name, tasks: project.tasks});
        })
    }

  getProjectDetails() {
      this.refreshState();
  }

  deleteProject(){
    this.projectService.deleteOne(this.props.id)
      .then(() => {
        console.log('Deleted');
        this.props.refreshState();
      })
      .catch(err => console.error(err))
  }

  addTask() {
      const data = {
        project_id: this.props.id,
        name: 'Task 1'
      }
      this.taskService.create(data)
          .then(() => {
          console.log('Task created');
          this.refreshState();
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
        <div className="card">
          <div className="card-header" data-toggle="collapse" data-target={'#project' + this.state.id} onClick={() => this.getProjectDetails()} >
              <div className="card-title">
                  {this.state.name}
              </div>
            <button onClick={() => this.deleteProject()}>Delete</button>
          </div>
            <div className="collapse" id={'project' + this.state.id} data-parent="#accordion">
                <div className="card-body">
                    {this.state.tasks.map((task) => {
                        task.refreshState = () => this.refreshState();
                        return (
                            <Task {...task} key={task.id} />
                        );
                    })}
                    <CreateTask project_id={this.state.id} refreshState={() => this.refreshState()} />

                </div>
            </div>

        </div>
    )
  }
}
