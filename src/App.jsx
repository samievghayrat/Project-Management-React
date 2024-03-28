import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectableProject from "./components/SelectedProject.jsx";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],

    });

    function handleSelectProject(id) {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        })
    }

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleCancelAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        })
    }

    function handleAddProject(projectData) {
        const projectId = Math.random();

        setProjectsState(prevState => {
            const newProject = {
                ...projectData,
                id: projectId,
            }
            return {
                ...prevState,
                selectedProjectId: projectId,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
    console.log(projectsState);
    let content = <SelectableProject project={selectedProject}></SelectableProject>;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}></NewProject>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar projects={projectsState.projects}
                            onStartAddProject={
                                handleStartAddProject} onSelectProject={handleSelectProject}>

            </ProjectSidebar>
            {content}        </main>
    );
}

export default App;
