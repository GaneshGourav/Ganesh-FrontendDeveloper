import logo from "../assets/Logo_ Savior.svg";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";
import email from "../assets/email.svg";
export const Footer = () => {
  return (
    <>
      <main>
        <div className="pb-10px">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
          <p className="text-red-600 font-bold gap-2">SITEMAP</p> <br />
          <div className="flex justify-center items-center text-white gap-5 flex-col md:flex-row">
            <div className="flex justify-center items-center gap-5 ">
              {" "}
              <p className="-m-0">Home</p>
              <p>IDO</p>
              <p className="-m-0">Tokenomics</p>
              <p className="-m-0">Road Map</p>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <p className="-m-0">Whitepaper</p>
              <p className="-m-0">Pledge</p>
              <p className="-m-0">NFT</p>
              <p className="-m-0">Games</p>
            </div>
          </div>{" "}
          <br />
          <div className="flex justify-center items-center gap-5">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={telegram} alt="" />
            </div>
            <div>
              {" "}
              <img src={email} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
