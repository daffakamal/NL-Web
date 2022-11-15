import { ChevronDownIcon } from '@heroicons/react/24/solid';
import LogoNL from '../../assets/images/Home/Logo NL.png';

const LandingPage = () => {
    return (
        <div className="w-full h-screen relative grid justify-items-center content-center">
            <img
                src={LogoNL}
                className="w-[300px]"
                alt="Logo Night Login"
            />
            <h1 className="font-poppinsBold text-center text-white text-[55px] pt-[10px]">
                Night Login UGM
            </h1>
            <a 
                href="#MainDesc"
                className="absolute mx-auto bottom-8 cursor-pointer animate-bounce"
            >
                <ChevronDownIcon className="w-12 lg:w-14 text-white" />
            </a>
        </div>
    );
}

export default LandingPage;