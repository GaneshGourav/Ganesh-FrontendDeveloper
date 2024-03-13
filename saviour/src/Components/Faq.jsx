import { useState } from "react";
import FaqImg from "../assets/FaqImg.svg";
import arrowdown from "../assets/ep_arrow-down-bold.svg";
import arrowup from "../assets/arrowup.svg";
import "../Styles/Animation.css";
export const Faq = () => {
  const FaqData = [
    {
      id: 1,
      question: "WHY CHOOSE 'SAVIOUR'? ",
      answer:
        "Saviour is good among all you will get all the unique facility here",
    },
    {
      id: 2,
      question: "WHY IS THE IDO DURATION SO LONG?",
      answer:
        "Every thing will sorted based on good experience so it's required long time ",
    },
    {
      id: 3,
      question: "WHEN WILL TRADING GO LIVE?",
      answer: "Every day at 12 PM.",
    },
    {
      id: 4,
      question: "WHEN CAN BE CLAIM THE TOKENS?",
      answer: "When you have 200USD value.",
    },
  ];
const[toggle,setToggle] = useState(null)
  const toggleFaq = (i)=>{
if(toggle === i){
    return setToggle(null)
}
setToggle(i)
  }

  return (
    <>
      <main>
        <div className="flex justify-center flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2  w-full pb-6" id="zoom">
            <img src={FaqImg} alt="" className="" />
          </div>
          <div></div>
         
<div></div>
          <div className="flex justify-center items-center flex-col md:flex-col font-ZCOOLKuaiLe text-white">
          <p className="text-2xl text-red-600 font-shojumaru mb-20">FAQ</p>
            <div className="">
              {FaqData.map((item, i) => (
                <div className="w-full md:w-[500px] bg-black border border-red-600 rounded-2xl pt-3 pb-3 pr-5 pl-5 mb-5 transition-all delay-300">
                  <div className="text-white flex justify-between w-full items-center font-shojumaru " onClick={()=>toggleFaq(i)}>
                   <div className="flex justify-between gap-10">  <h2>{item.id}</h2>
                    <h2>{item.question}</h2></div>
                   
                  
                    <span>{toggle===i?<img src={arrowup} className="w-[16px]" />:<img src={arrowdown} />}</span>
                  </div>
                  <div className={toggle===i?'contentshow':'content'} >{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
