import { Link } from "react-router-dom";

const Footer = () => {
    return (
            <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
            <header className="footer-title">Services</header>
            <Link to={'/'} className="link link-hover">Home</Link> 
            <Link to={'/about'} className="link link-hover">About</Link> 
            <Link to={'/projects'} className="link link-hover">Projects</Link> 
            <Link to={'/contact'} className="link link-hover">Contact</Link> 
        </nav> 
        {/* <nav>
            <header className="footer-title">Company</header> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
            <header className="footer-title">Legal</header> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav> */}
        </footer>
    );
}
export default Footer;