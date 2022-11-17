import logo from '../../assets/images/nightLogin.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navButtons = (title, link) => {
        return <Link className=" mx-7" to={link}>{title}</Link>
    }
    return ( 
        <div className="w-full flex flex-row h-20 bg-red-NL shadow-2xl fixed z-40">
            <div className="flex-1 flex items-center my-5 pl-40">
                <a 
                    href="/"
                    className="flex items-center"
                >
                    <img 
                        src={logo} 
                        className="inline mr-4 w-[44px]" 
                        alt="Logo Night Login" 
                    />
                    <h1 className="inline font-poppinsSemi text-2xl text-white">
                        Night Login
                    </h1>
                </a>
            </div>
            <div className="flex-1 flex max-w-xl font-poppinsMedium text-lg my-6 text-white">
                {navButtons("Home", "/")}
                {navButtons("About", "/about")}
                {navButtons("Event", "")}
                {navButtons("Community", "")}
            </div>
        </div>
     );
}
 
export default Navbar;