import logo from './image/nightLogin.png'

const AboutPage = () => {
    const navButtons = (title, link) => {
        return <a className=" mx-4" href={link}>{title}</a>
    }

    return ( 
    <div className="AboutPage">
        <div className="flex flex-row h-16 bg-red-NL justify-between shadow-3xl relative">
            <div className="font-bold text-white my-4 ml-48">
                <img className="inline mr-1" src={logo} alt="logo" />Night Login</div>
            <div className="my-4 mr-10 text-white">
                {navButtons("Home", "https://google.com")}
                {navButtons("About", "https://google.com")}
                {navButtons("Event", "https://google.com")}
                {navButtons("Community", "https://google.com")}
            </div>
        </div>
        <div className="home h-96 bg-red-NL">

        </div>
    </div> );
}
 
export default AboutPage;