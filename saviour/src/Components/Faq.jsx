import FaqImg from "../assets/FaqImg.svg"

export const Faq = () =>{
    return <>
    <main>
<div className="flex justify-center flex-col md:flex-row items-center mb-16">
    <div className="w-1/2"><img src={FaqImg} alt="" className="" /></div>
    <div>
        
    </div>
    <div>
    <p className="text-2xl text-red-600 font-shojumaru mb-20">FAQ</p>
        <div className="border border-red-600 rounded-3xl text-white font-shojumaru flex justify-around items-center gap-5 pl-6 pr-6 pt-3 pb-3">
            <p>1</p>
            <p>WHY CHOOSE "SAVIOUR"</p>
            <p></p>
        </div><br />
        <div className="border border-red-600 rounded-3xl text-white font-shojumaru flex justify-around items-center gap-5 pl-6 pr-6 pt-3 pb-3">
            <p>2</p>
            <p>WHY IS THE IDO DURATION SO LONG</p>
            <p></p>
        </div><br />
        <div className="border border-red-600 rounded-3xl text-white font-shojumaru flex justify-around items-center gap-5 pl-6 pr-6 pt-3 pb-3">
            <p>3</p>
            <p>WHEN WILL TRADING GO LIVE</p>
            <p></p>
        </div> <br />
        <div className="border border-red-600 rounded-3xl text-white font-shojumaru flex justify-around items-center gap-5 pl-6 pr-6 pt-3 pb-3">
            <p>4</p>
            <p>WHICH CAN WE CLAIM THE TOKEN</p>
            <p></p>
        </div>
        
    </div>
</div>
    </main>
    
    </>
}