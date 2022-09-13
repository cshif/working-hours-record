import {projects} from "../../../assets/data/projects";
import folderOpen from "../../../assets/icon/folder_open_FILL0_wght400_GRAD0_opsz48.svg";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="title">Projects</h2>
      <ProjectsContainer />
    </div>
  );
}

function ProjectsContainer() {
  const projectItems = projects.map(item => <ProjectItem item={item} />);
  return (
    <div className="projects-container">
      {projectItems}
      <div className="action">
        <div className="action-item">Add New Project</div>
        <div className="action-item">...</div>
      </div>
    </div>
  );
}

function ProjectItem({item}) {
  return (
    <div onClick={test} className="project-item">
      <div className="project-item-icon">
        <img src={folderOpen} alt="folder-open-icon"/>
      </div>
      <div className="project-item-info">
        <p className="project-item-name">{item.name}</p>
        <p className="project-item-status">{item.status.name}</p>
        <p className={`
          project-item-hours
           ${netHours(item) >= 0 ? 'positive' : 'negative'} 
        `}>
          {netHours(item)} <span className="unit">hours</span>
        </p>
      </div>
    </div>
  );
}

function netHours(item) {
  return (item.estWorkingHours - item.accWorkingHours);
}

function test() {
  console.log('clicked!');
}
