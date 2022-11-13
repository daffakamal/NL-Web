import logo from './image/nightLogin.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navButtons = (title, link) => {
        return <Link className=" mx-4" to={link}>{title}</Link>
    }
    return ( 
        <div className="flex flex-row h-16 bg-red-NL justify-between shadow-3xl relative">
            <div className="font-bold text-white my-4 ml-48">
                <img className="inline mr-1" src={logo} alt="logo" />Night Login</div>
            <div className="my-4 mr-10 text-white">
                {navButtons("Home", "/home")}
                {navButtons("About", "/about")}
                {navButtons("Event", "https://google.com")}
                {navButtons("Community", "https://google.com")}
            </div>
        </div>
     );
}
 
export default Navbar;