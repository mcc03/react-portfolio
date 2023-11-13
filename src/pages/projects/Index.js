import { useState } from 'react';

import projectsJSON from '../../assets/data/projects.json'
import ProjectCard from '../../components/ProjectCard';

const Index = () => {

    const [projects, setProject] = useState(projectsJSON);

    // map through each projects
    const projectList = projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />
    })

    console.log(projects)

    return (
        <div className='grid grid-cols-2 gap-2 justify-items-center'>
            {projectList}
        </div>
    );
};

export default Index;