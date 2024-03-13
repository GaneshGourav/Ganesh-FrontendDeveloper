import intro_logo from "../assets/introduction_logo.svg"
import background from "../assets/intro_background_img.svg"
import arrowdown from "../assets/ep_arrow-down-bold.svg";
import "../Styles/Animation.css"

export const Introduction = () =>{

    return <>
<main>
  <div className="flex flex-col md:flex-row justify-around items-center bg-black   mx-auto p-4" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className="w-full md:w-1/3  px-4 md:text-left order-2 md:order-1">
      <p className="font-shojumaru text-red-600 pr-5 text-left text-3xl mb-5 hidden sm:block">Introduction</p>
      <p className="text-white font-ZCOOLKuaiLe  text-2xl  mb-10 ">
        We've all been in the mud once, and now we've decided to fight it out.
        Pay tribute to those pioneers of WEB3 and the warriors who dedicated
        their love to the blockchain. Save the lucky ones alive, join us to
        save the future! Our mission is to empower everyone to share wealth and
        succeed. 
        read more...
      </p>
      <div className="flex justify-center items-center">
      <div className=" flex justify-center items-center gap-2 w-1/2 text-white font-ZCOOLKuaiLe  mb-5  p-3 rounded-full bg-gradient-to-r from-red-600 to-red-700">
      <button >Documents</button>
      <img src={arrowdown} alt="" />
      </div>
      </div>
   
    </div>
    <div className="F w-full md:w-1/3 mt-4 md:mt-0 order-1 md:order-2 p-5 " id="zoom">
    <p className="font-shojumaru text-red-600 pr-5 text-center text-3xl mb-5 md:hidden">Introduction</p>
      <img src={intro_logo} alt="Introduction_logo" className="max-w-1/4 max-h-1/4" />
    </div>
  </div>
</main>



    </>
}