import Logo from './image/long-1.png';
import HappyBunchL from './image/HappyBunch-left.png';
import HappyBunchR from './image/HappyBunch-right.png';
import BoxProfile from './BoxProfile.js';

const AboutPage = () => {


    return (
        <div className="AboutPage">

            <div className="home h-200 bg-red-NL">
                <div className="py-24 flex flex-row justify-center h-100">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="about">
                    <h2 className="text-white text-4.5xl  font-bold">
                        About Night Login
                    </h2>
                    <p className="mx-36 my-7 text-white text-xl leading-9 text-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos non iste cupiditate perferendis dolore fugit, magni, labore minus nobis temporibus repellendus consequuntur quisquam laborum nesciunt, accusantium modi rem atque ut tempora earum? Ullam, quo ad. Quidem quaerat itaque vitae blanditiis, commodi inventore debitis atque minima minus in eligendi laboriosam laudantium quis corrupti beatae. Adipisci, nam recusandae? Ducimus blanditiis nisi modi accusamus a repellat aliquid quibusdam rem, ut rerum! Voluptates, dolores?
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <img src={HappyBunchL} alt="myPicture" className="h-100" />
                    <img src={HappyBunchR} alt="myPicture" className="h-100" />
                </div>
                <div className="h-72 bg-pink-NL rounded-10xl mx-56 px-7 mt-0 shadow-custom shadow-grey">
                    <h2 className=" text-black-NL text-4.5xl  font-bold pt-10 my-1">#BeginToGain</h2>
                    <p className="text-black-NL text-xl mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam odio iure animi quis, architecto cum molestias! Excepturi, repellat fuga neque possimus sapiente eos ipsum unde a ab aut provident rem temporibus, laborum nihil asperiores aspernatur enim beatae, placeat eaque praesentium perspiciatis! Quasi veniam voluptatibus tempore nihil hic iste fugiat!</p>
                </div>
                <div className="h-[250rem] mt-40 bg-black-NL rounded-t-180px">
                    <h2 className="text-white text-4.5xl font-bold pt-32">
                        Meet The Team
                    </h2>
                    <p className="text-white text-2xl mt-7 mb-10">Introducing our incredible team from different field and interest</p>
                    <div className="box">
                        <div className="presiden">
                            <BoxProfile title ="President" name="Samatha Marhaendra P." />
                            <BoxProfile title ="Vice" name="Christian Ale P." />
                        </div>
                        <div className="w-80 bg-white ml-40 my-32 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                            <p className="my-3 font-bold text-[1.8rem] text-black-NL ">Management Team</p>
                        </div>
                        <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                            <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl "><h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">Public Relation Team</h3></div>
                        </div>
                        <div className="vice">
                            <BoxProfile title ="Head" name="Sagara Aldavy M.N.S" />
                            <BoxProfile title ="Member" name="Khairun Nisa’ Z." />
                            <BoxProfile title ="Member" name="Byan Cahaya R. A" />
                        </div>
                        <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                            <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl "><h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">Creative Media Team</h3></div>
                        </div>
                        <div className="vice">
                            <BoxProfile title ="Head" name="Arifah Amelia T." />
                            <BoxProfile title ="Member" name="Fajar Rizki W." />
                            <BoxProfile title ="Member" name="M. Daniyal Kautsar" />
                        </div>
                        <div className="flex flex-row bg-red-NL h-[0.2rem] ml-[10%] mt-24 mb-10">
                            <div className="-mt-8 bg-red-NL py-8 px-[2.8rem] rounded-10xl "><h3 className="-mt-4 text-white font-semibold text-[1.4rem] ">Administration Team</h3></div>
                        </div>
                        <div className="vice">
                            <BoxProfile title ="Head" name="Gerrit Ezra Yudi K." />
                            <BoxProfile title ="Member" name="Talitha Andani" />
                            <BoxProfile title ="Member" name="Dhiyaa Amalia P" />
                            <BoxProfile title ="Member" name="Anisa Nur Rahmalina"/>
                        </div>
                        <div className="w-80 bg-white ml-40 mt-20 shadow-[7px_5px_0_1px_#DA4949,13px_10px_0_1px_#FE8F75,13px_10px_0_4px_black] border-solid border-black border-4">
                            <p className="my-3 font-bold text-[1.8rem] text-black-NL ">Community Team</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>);
}

export default AboutPage;