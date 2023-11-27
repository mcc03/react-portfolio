import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
//import projectsJSON from '../../assets/data/projects.json';
import axios from "axios";


const Demo = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const App = lazy(() => import(`./demos/${slug}/App`));

    useEffect(() => {

        axios.get('https://marlon-portfolio-cb63d-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            let proj = response.data.find(project => project.slug === slug);

            if(!proj){
                navigate("/projects")
            } else if (!proj.demo){
                navigate(`/projects/${proj.slug}`);
            }
    
            // find will find, then stop
            setProject(proj);
        })
        .catch(e => {
            console.error(e);
        })



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