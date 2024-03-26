import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }
let content;
    if(projectsState.selectedProjectId===null){
        content = <NewProject></NewProject>
    }else if(projectsState.selectedProjectId === undefined){
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar onStartAddProject = {handleStartAddProject}></ProjectSidebar>
            {content}        </main>
    );
}

export default App;
