import LogoNL from '../../assets/images/Home/Logo NL.png';

const LandingPage = () => {
    return (
        <div className="w-full h-screen grid justify-items-center content-center">
            <img
                src={LogoNL}
                className="w-[300px]"
                alt="Logo Night Login"
            />
            <h1 className="font-poppinsBold text-center text-white text-[55px] pt-[10px]">
                Night Login UGM
            </h1>
        </div>
    );
}

export default LandingPage;