import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//import projectsJSON from '../../assets/data/projects.json';

const Show = () => {
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        //using filter, loop through projects to find todo app
        // let temp = projectsJSON.filter((project) => {
        //     return project.slug === slug;
        // });

        axios.get('https://marlon-portfolio-cb63d-default-rtdb.europe-west1.firebasedatabase.app/.json')
        .then(response => {
            setProject(response.data.find(project => project.slug === slug));
        })
        .catch(e => {
            console.error(e);
        })
        
        // find will find, then stop
        //setProject(projectsJSON.find(project => project.slug === slug));

    }, []);

    // if project does not exist, do this
    if(!project) { return (<h1>Project does not exist</h1>)};

    const tags = project.tags.map((tag, i) => {
        return (
            <div key={i} className="badge badge-outline badge-primary">{tag}</div>
        );
    })

    let imageCarousel = "";

    if(project.images) {

        let items = project.images.map((image, i) => {
            return (
                <div id={`item${i}`} className="carousel-item w-full">
                    <img title={image.caption} src={`${image.path}`} className="w-full max-h-[20rem]" />
                </div> 
            );
        });

        
        let buttons = project.images.map((image, i) => {
            return (
                <a href={`#item${i}`} className="btn btn-xs">{i+1}</a>
            );
        });

        imageCarousel = (
            <>
            <div className="carousel">
                {items}
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                {buttons}
            </div>
            </>
        );
    }

    return (
        // bg-gradient-to-r from-black to-blue-500
        <div className="flex items-center justify-center py-10 bg-slate-200">
                <div className="card w-[64rem] bg-slate-50 shadow-md text-black">
        <div className="card-body justify-center">

            <label className="text-gray-400 font-light tracking-widest">Title</label>
            <p className="text-4xl">{project.title}</p>
            <hr/>

            <label className="text-gray-400 font-light tracking-widest">Description</label>
            <p className="text-lg">{project.description}</p>
            <hr/>

            <label className="text-gray-400 font-light tracking-widest">Screenshots</label>
            {imageCarousel}
            <hr/>

            <label className="text-gray-400 font-light tracking-widest">Date</label>
            <p className="text-lg">{project.date}</p>
            <hr/>

            <label className="text-gray-400 font-light tracking-widest">Tags</label>
                <p className="card-actions">{tags}</p>
            <hr/>

            <label className="text-gray-400 font-light tracking-widest">Links</label>
            <div className="flex gap-2">
            <Link to={project.website} target="_blank" rel="noreferrer" className="btn btn-primary">WEB</Link>
            <Link to={project.github} target="_blank" rel="noreferrer" className="btn btn-primary" >GITHUB</Link>
            </div>

            {/* turney to display demo */}
            {(project.demo) ? (
                <Link to={`/projects/${project.slug}/demo`} target="_blank" rel="noreferrer" 
                className="btn btn-primary text-white bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500" >DEMO</Link>
            ) : ""}
            
            </div>
        </div>


        </div>
    );
}

export default Show;