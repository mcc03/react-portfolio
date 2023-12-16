import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    const tags = project.tags.map((tag, i) => {
        return (
            <div key={i} className="badge badge-outline badge-primary">{tag}</div>
        );
    })

	return (

		<div className="card max-w-[24rem] bg-stone-100 shadow-xl grid grid-cols-1">
			<figure>
				<img
					src={project.images[0].path}
					alt={project.images[0].caption}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title text-black">
					{project.title}
				</h2>
				<p className="text-black">{project.description}</p>

				<div className="card-actions justify-start">
                    {tags}
				</div>	

				<div className="card-actions justify-end">

                    {/* checking if project has website */}
                    {(project.website) ? (<a href={project.website} target="_blank" rel="noreferrer" className="btn btn-primary">Website</a>) : ""}

                    {/* checking if project has github */}
                    {(project.github) ? (<a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>) : ""}

                    <Link className="btn btn-primary" to={`/projects/${project.slug}`}>Show</Link>
                    
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
