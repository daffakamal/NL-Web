import { HtmlHead } from "../../components/HtmlHead";
import Logo from "../../assets/images/About/long.png";
import LogoNADC from "../../assets/images/Home/Logo-NADC.png";
import LogoNCPC from "../../assets/images/Home/Logo-NCPC.png";
import LogoNDDC from "../../assets/images/Home/Logo-NDDC.png";
import LogoNLNC from "../../assets/images/Home/Logo-NLNC.png";
import LogoNUXC from "../../assets/images/Home/Logo-NUXC.png";
import LogoNWDC from "../../assets/images/Home/Logo-NWDC.png";
import HappyBunchL from "../../assets/images/About/HappyBunch-left.png";
import HappyBunchR from "../../assets/images/About/HappyBunch-right.png";
import HappyBunch from "../../assets/images/About/HappyBunch.png";
import Drawkit from "../../assets/images/About/Drawkit.png";
import BoxProfile from "./BoxProfile.js";
import { useState } from "react";
import { NLAdministrator } from "../data/dataPengurusNL.js";

const AboutPage = () => {
  const communitiesData = [
    {
      id: "NADC",
      logo: LogoNADC,
      communityName: "Aplication Development",
      title: "Head",
      name: "Firdaus Bisma Suryakusuma",
      viceTitle: "Vice Head",
      viceName: "Muhammad Hasan Chamdany",
    },
    {
      id: "NCPC",
      logo: LogoNCPC,
      communityName: "Competitive Programming",
      title: "Head",
      name: "Harry Krisna Darmawan",
      viceTitle: "Vice Head",
      viceName: "Wiweka Yoga Sadewa",
    },
    {
      id: "NDDC",
      logo: LogoNDDC,
      communityName: "Data Science and Data Analitic",
      title: "Head",
      name: "Rizky Alif Ramadhan",
      viceTitle: "Vice Head",
      viceName: "Karunia Perjuangan",
    },
    {
      id: "NLNC",
      logo: LogoNLNC,
      communityName: "Linux and Networking",
      title: "Head",
      name: "Muhammad Farrel Rafirizqy",
      viceTitle: "Vice Head",
      viceName: "Novaldy Pratama",
    },
    {
      id: "NUXC",
      logo: LogoNUXC,
      communityName: "User Experience",
      title: "Head",
      name: "Tiara Kesuma Putri",
      viceTitle: "Vice Head",
      viceName: "Annisa Somaningtyas",
    },
    {
      id: "NWDC",
      logo: LogoNWDC,
      communityName: "Web Development",
      title: "Head",
      name: "Aldo Arya Saka Mukti",
      viceTitle: "Vice Head",
      viceName: "Alphonsus Jovian Joy Reynaldo",
    },
  ];

  const [activeButton, setActiveButton] = useState("NADC");
  const [activeLogo, setActiveLogo] = useState(LogoNADC);
  const [activeCommunityName, setActiveCommunityName] = useState(
    "Aplication Development"
  );
  const [activeTitle, setActiveTitle] = useState("Head");
  const [activeName, setActiveName] = useState("Gerrit");
  const [activeViceTitle, setActiveViceTitle] = useState("Head");
  const [activeViceName, setViceActiveName] = useState("Gerrit");

  return (
    <>
      <HtmlHead
        title="About"
        decription="Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi."
      />
      <div className="min-h-full overflow-hidden">
        <div className="min-h-full 2xl:min-h-screen text-center">
          <div className="relative mx-auto py-20 lg:py-32 mb-32 text-center px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-[134px]">
            <div className="2xl:max-w-[1400px] mx-auto py-24 flex flex-row justify-center">
              <img
                className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)]"
                src={Logo}
                loading="lazy"
                alt="logo night login"
              />
            </div>
            <div className="w-full 2xl:max-w-[1400px] mx-auto">
              <h2 className="font-poppinsBold text-white text-[28px] md:text-[35px] lg:text-[40px]">
                About Night Login
              </h2>
              <p className="font-poppinsRegular my-7 text-white text-[17px] md:text-[20px] lg:text-[23px] xl:text-[24px] leading-7 md:leading-8 lg:leading-9 text-center">
                Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM
                yang bergerak di bidang teknologi informasi. BSO ini merupakan
                wadah bagi mahasiswa DTETI yang memiliki minat di bidang IT
                untuk mengembangkan kemampuan, kreativitas, inovasi, dan
                memperluas wawasan terkait bidang-bidang IT.
              </p>
            </div>
            <img
              src={HappyBunchL}
              alt="decoration"
              className="w-[250px] absolute left-0 -bottom-36 md:-bottom-44 lg:-bottom-32 z-0"
              loading="lazy"
            />
            <img
              src={HappyBunchR}
              alt="decoration"
              className="w-[216px] absolute right-0 -bottom-36 md:-bottom-44 lg:-bottom-32 z-0"
              loading="lazy"
            />
          </div>
          <div className="px-7 smallest:px-12 sm:px-14 pb-40 z-40 mx-auto">
            <div className="max-w-[600px] md:max-w-[700px] lg:max-w-[840px] xl:max-w-[970px] 2xl:max-w-[1200px] mx-auto bg-pink-NL rounded-10xl py-11 md:py-14 xl:py-16 px-10 lg:px-12 xl:px-14 mt-0 shadow-custom shadow-grey">
              <h2 className="text-black-NL font-poppinsBold text-[28px] md:text-[35px] lg:text-[40px] mb-1">
                #BeginToGain
              </h2>
              <p className="font-poppinsRegular text-black-NL text-[17px] md:text-[20px] lg:text-[22px] leading-7 md:leading-8 lg:leading-9 mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                veniam odio iure animi quis, architecto cum molestias!
                Excepturi, repellat fuga neque possimus sapiente eos ipsum unde
                a ab aut provident rem temporibus, laborum nihil asperiores
                aspernatur enim beatae, placeat eaque praesentium perspiciatis!
                Quasi veniam voluptatibus tempore nihil hic iste fugiat!
              </p>
            </div>
          </div>
          <div className="bg-black-NL rounded-3xl md:rounded-3.5xl xl:rounded-5xl">
            <div className="px-7 smallest:px-12 sm:px-14">
              <h2 className="text-white text-[28px] md:text-[35px] lg:text-[40px] font-poppinsBold pt-[60px] lg:pt-[80px] xl:pt-[90px]">
                Meet The Team
              </h2>
              <p className="font-poppinsRegular text-white text-[17px] md:text-[20px] lg:text-[23px] xl:text-[24px] mt-4 mb-10">
                Introducing our incredible team from different fields and
                interests
              </p>
            </div>
            <div className="h-full">
              <div className="w-full flex flex-wrap justify-center">
                <BoxProfile
                  title="President"
                  name={NLAdministrator.leader.president}
                />
                <BoxProfile title="Vice" name={NLAdministrator.leader.vice} />
              </div>
              <div className="my-32 ml-[10%]">
                <h2 className="font-poppinsSemi w-64 md:w-72 lg:w-80 py-3 text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-black-NL bg-white shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                  Management Team
                </h2>
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[19px] md:text-[20px] lg:text-[22px]">
                    Public Relation Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[5%] xl:ml-[7%]">
                <BoxProfile
                  title="Head"
                  name={NLAdministrator.managementTeam.publicRelationTeam.head}
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.publicRelationTeam.members[0]
                  }
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.publicRelationTeam.members[1]
                  }
                />
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[19px] md:text-[20px] lg:text-[22px]">
                    Creative Media Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[6%]">
                <BoxProfile
                  title="Head"
                  name={NLAdministrator.managementTeam.creativeMediaTeam.head}
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.creativeMediaTeam.members[0]
                  }
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.creativeMediaTeam.members[1]
                  }
                />
              </div>
              <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl">
                  <h3 className="font-poppinsSemi -mt-4 text-white text-[19px] md:text-[20px] lg:text-[22px]">
                    Administration Team
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap justify-start ml-[6%]">
                <BoxProfile
                  title="Head"
                  name={NLAdministrator.managementTeam.administrationTeam.head}
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.administrationTeam.members[0]
                  }
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.administrationTeam.members[1]
                  }
                />
                <BoxProfile
                  title="Member"
                  name={
                    NLAdministrator.managementTeam.administrationTeam.members[2]
                  }
                />
              </div>
              <div className="ml-[10%] mt-20 mb-14 lg:mb-20">
                <p className="font-poppinsSemi my-3 w-64 md:w-72 lg:w-80 py-3 text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-black-NL bg-white shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                  Community Team
                </p>
              </div>
              {/* Membuat Comunity Section */}
              <div className="flex flex-row pb-3 mx-[10%] font-poppinsSemi overflow-x-auto">
                {communitiesData.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveButton(item.id);
                      setActiveLogo(item.logo);
                      setActiveCommunityName(item.communityName);
                      setActiveTitle(item.title);
                      setActiveName(item.name);
                      setActiveViceTitle(item.viceTitle);
                      setViceActiveName(item.viceName);
                    }}
                    className={`${
                      activeButton === item.id
                        ? "py-2 mg:py-3 px-5 lg:px-8 mx-3 lg:mx-5 text-[18px] lg:text-xl rounded-[2rem] lg:rounded-[2.5rem] bg-white text-red-NL"
                        : "py-2 mg:py-3 px-5 lg:px-8 mx-3 lg:mx-5 text-[18px] lg:text-xl rounded-[2rem] lg:rounded-[2.5rem] bg-red-NL text-white"
                    }`}
                  >
                    {item.id}
                  </button>
                ))}
              </div>
              {/* Community box */}
              <div>
                <div className="w-full flex flex-col lg:flex-row justify-center content-center pt-6 lg:pt-10 my-10 px-7">
                  <div className="mx-auto lg:m-0 flex flex-col lg:flex-row justify-center content-center">
                    <img
                      src={activeLogo}
                      alt={`Logo ${activeLogo}`}
                      className="m-auto w-[270px] sm:w-[300px] lg:h-[131px] xl:h-auto xl:w-[300px] pb-3 lg:pb-0"
                    />
                    <div className="hidden lg:block mx-12 lg:mx-14 bg-red-NL w-1"></div>
                    <div className="flex items-center max-w-[350px] xl:max-w-[400px] 2xl:max-w-[400px] font-poppinsMedium py-5 break-word text-white text-2xl lg:text-[26px] xl:text-3xl">
                      Night Login {activeCommunityName} Community
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-wrap justify-center">
                  <BoxProfile title={activeTitle} name={activeName} />
                  <BoxProfile title={activeViceTitle} name={activeViceName} />
                </div>
              </div>
              <div className="relative flex flex-col justify-center bg-pink-NL mt-32 rounded-3xl md:rounded-3.5xl xl:rounded-5xl py-16 pt-[60px] lg:pt-[80px] xl:pt-[90px] px-7 smallest:px-12 sm:px-14 md:px-20 lg:px-[120px] xl:px-[134px]">
                <div className="flex flex-col lg:flex-row items-center lg:gap-x-5 xl:gap-x-20 z-30 2xl:max-w-[1400px]">
                  <div className="w-full my-auto lg:text-start pb-[50px] sm:pb-[60px] md:pb-[70px] xl:pb-[70px] 2xl:pb-[59px]">
                    <h2 className="font-poppinsBold text-white text-[25px] xl:text-[30px] 2xl:text-[31px]">
                      Do you want to be a part of Night Login?
                    </h2>
                    <p className="font-poppinsMedium text-white text-[25px] xl:text-[30px] 2xl:text-[28px] pt-4">
                      Wait for further information!
                    </p>
                  </div>
                  <img
                    src={Drawkit}
                    alt="Illustrasi"
                    className="mx-auto max-w-none w-full smallest:max-w-[380px] lg:max-w-[360px] xl:max-w-[470px] 2xl:max-w-[500px]"
                    loading="lazy"
                  />
                </div>
                <img
                  src={HappyBunch}
                  alt="Dekorasi"
                  className="absolute z-10 -bottom-20 2xl:-bottom-24 left-0 hidden md:block w-44 lg:w-44 xl:w-48 2xl:w-56"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
