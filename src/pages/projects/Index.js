import { useState, useEffect } from 'react';
import axios from 'axios';

//import projectsJSON from '../../assets/data/projects.json'
import ProjectCard from '../../components/ProjectCard';

const Index = () => {

    const [projects, setProject] = useState(null);

    useEffect(() => {
        axios.get('https://marlon-portfolio-cb63d-default-rtdb.europe-west1.firebasedatabase.app/.json')
            .then(response => {
                setProject(response.data)
            })
            .catch(e => {
                console.error(e);
            })
    }, []);

    if(!projects) return <h1>Loading projects...</h1>

    // map through each projects
    const projectList = projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />
    })

    console.log(projects)

    return (
            <div className="flex flex-wrap justify-center py-10 bg-slate-200">
                <div className="grid grid-cols-3 gap-4">
                    {projectList}
                </div>
            </div>
    );
};

export default Index;