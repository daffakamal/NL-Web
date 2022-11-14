import LogoNL from '../../assets/images/Home/Logo NL.png';

const LandingPage = () => {
    return (
        <div className="w-full h-screen grid justify-items-center content-center">
            <img
                src={LogoNL}
                className="w-[207px]"
                alt="Logo Night Login"
            />
            <h1 className="text-center text-white text-[48px] pt-[49px]">
                Night Login UGM
            </h1>
        </div>
    );
}

export default LandingPage;