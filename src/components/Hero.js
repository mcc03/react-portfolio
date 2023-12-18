import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-slate-200 px-4 justify-center">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					alt=""
					src="https://picsum.photos/200/300"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold text-black">Hello, my name is Marlon!</h1>
					<p className="py-6 text-black">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<Link to="/projects"><button className="btn btn-primary">VIEW PROJECTS</button></Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
