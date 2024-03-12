import background from "../assets/Roadmap_background.svg"
import img1 from "../assets/roadmapImg1.svg"
import bcakground1 from "../assets/imgbackground.svg"

export const Roadmap = () => {
    return (
        <>
            <main className="pb-10" style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <p className="font-shojumaru text-3xl text-red-600 pt-10">Road map</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
                    <div className="mb-5 md:mb-0">
                        <div className=" relative border border-red-600 rounded-2xl">
                            <img src={img1} alt="" />
                            <div className="text-red-600 absolute bottom-5 text-left left-5">
                                <p className="text-white text-bold">Phase1</p>
                                <p className="text-gray-400 text-[14px]">Technical Readiness and Smart Contract Audit</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 md:mb-0">
                        <div className=" relative border border-red-600 rounded-2xl">
                            <img src={img1} alt="" />
                            <div className="absolute bottom-5 text-left left-5">
                                <p className="text-white">Phase 2</p>
                                <p className="text-gray-400 text-[14px]">Increase Liquidity and Trading Volume</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-row justify-center items-center gap-10">
                        <div>
                            <div className=" relative border border-red-600 rounded-2xl">
                                <img src={img1} alt="" />
                                <div className="absolute bottom-5 text-left left-5">
                                    <p className="text-white">Phase 3</p>
                                    <p className="text-gray-400 text-[14px]">Community Building and Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" relative border border-red-600 rounded-2xl">
                                <img src={img1} alt="" />
                                <div className="absolute bottom-5 text-left left-5">
                                    <p className="text-white">Phase 4</p>
                                    <p className="text-gray-400 text-[14px]">Ecosystem Expansion and Partnerships</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}


