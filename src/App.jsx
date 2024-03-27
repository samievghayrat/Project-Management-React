import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],

    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }
    function handleAddProject(projectData){
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

    console.log(projectsState);
    let content;
    if(projectsState.selectedProjectId===null){
        content = <NewProject onAdd={handleAddProject}></NewProject>
    }else if(projectsState.selectedProjectId === undefined){
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar projects={projectsState.projects} onStartAddProject = {handleStartAddProject}></ProjectSidebar>
            {content}        </main>
    );
}

export default App;
