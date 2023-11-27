import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import projectsJSON from '../../assets/data/projects.json';


const Demo = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const App = lazy(() => import(`./demos/${slug}/App`));

    useEffect(() => {

        let proj = projectsJSON.find(project => project.slug === slug);

        if(!proj){
            navigate("/projects")
        } else if (!proj.demo){
            navigate(`/projects/${proj.slug}`);
        }

        // find will find, then stop
        setProject(proj);

    }, []);

    // if project does not exist, do this
    if(!project) { return (<h1>Project does not exist</h1>)};

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <App />
        </Suspense>
    );
}

export default Demo;