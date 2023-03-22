import { ChevronDownIcon } from '@heroicons/react/24/solid';
import LogoNL from '../../assets/images/Logo NL.png';

const LandingPage = () => {
    return (
      <div className="min-h-[60vh] lg:min-h-[100vh] py-20 md:py-24 lg:py-20 relative grid">
        <div className="w-full min-h-full relative grid justify-items-center content-center">
          <img
            src={LogoNL}
            className="w-[150px] md:w-[200px] lg:w-[230px] xl:w-[250px] 2xl:w-[300px]"
            fetchpriority="high"
            alt="Logo Night Login"
          />
          <h1 className="font-poppinsBold text-center text-white text-[30px] md:text-[36px] lg:text-[40px] xl:text-[47px] 2xl:text-[55px] pt-[1px] md:pt-[10px]">
            Night Login UGM
          </h1>
          <a
            href="#MainDesc"
            className="relative my-auto -bottom-20 lg:-bottom-28 xl:-bottom-32 2xl:-bottom-48 cursor-pointer animate-bounce"
          >
            <ChevronDownIcon className="w-8 md:w-10 lg:w-12 2xl:w-14 text-white" />
          </a>
        </div>
      </div>
    );
}

export default LandingPage;