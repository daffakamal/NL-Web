const BoxProfile = ({title, name}) => {
    return (
      <div className="w-fit flex flex-col justify-center my-6 mx-12 xl:mx-16">
        <div className="mx-auto w-48 sm:w-56 lg:w-60 2xl:w-72 h-[210px] sm:h-[230px] lg:h-64 2xl:h-76 bg-grey-NL rounded-4xl border-solid border-black border-4 shadow-custom2"></div>
        <p className="font-poppinsSemi mt-8 text-white text-2xl">{title}</p>
        <p className="font-poppinsRegular my-2 text-white text-xl">{name}</p>
      </div>
    );
}
 
export default BoxProfile;