import copyImf from "../assets/fullent-copy.svg";
import "../Styles/Animation.css"
export const Event = () => {
  return (
    <>
      <main className="bg-black flex flex-col justify-around mb-20">
        <div>
          <p className="text-red-600 text-2xl font-shojumaru mb-10">
            Participate in our IDO Event!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <div className="w-full sm:w-1/2 m-auto">
            <div>
              <p className="text-white font-ZCOOLKuaiLe">
                During our IDO event, you will gain early access to our
                revolutionary ecosystem, designed to empower everyone to share
                wealth and achieve success.
              </p>
            </div>

            <div
              id="left"
              className="flex justify-center items-center m-auto border border-red-600 w-full sm:w-1/2 pt-3 pb-3 rounded-lg relative mt-10"
            >
              <div className="flex items-center justify-center m-auto p-8">
                <div className="font-ZCOOLKuaiLe">
                  <table className="w-full  text-left table-fixed">
                    <tbody className="text-white ">
                      <tr>
                        <td>Total Token <br /> Supply</td>
                        <td> <span className="text-red-600">20%</span></td>
                      </tr>
                      <br />
                      <tr>
                        <td>Soft cap</td>
                        <td> <span className="text-red-600">200 BNB</span></td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          Initial Exchange <br /> Rate
                        </td>
                        <td>  <span className="text-red-600">1 BNB</span></td>
                      </tr>
                    </tbody>
                  </table>{" "}
                  <br />
                  <p className="text-white text-left ">
                    Recommended Referral Commission
                  </p>{" "}
                  <br />
                  <table className="w-full text-left table-fixed">
                    <tbody className="text-white">
                      <tr>
                        <td>1st Generation</td>
                        <td><span className="text-red-600">5%</span></td>
                      </tr>{" "}
                      <br />
                      <tr>
                        <td>2nd Generation</td>
                        <td><span className="text-red-600">2%</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="font-shojumaru border border-red-600 rounded-lg p-3 text-white w-1/2 sm:w-1/2 bg-red-700 absolute top-[-25px]">
                <p>Token Info</p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
              <button className="text-white mt-5  p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full">
                Connect Wallet
              </button>
              <p className="text-red-600 font-shojumaru mt-5 w-[250px] text-[17px] sm:w-[300px]">
                Become an affiliate & Earn 7% as Commission!
              </p>
              <div className="flex justify-center items-center gap-3 md:justify-center">
                <div className="text-red-500 border border-red-600 rounded-full w-full md:w-[400px] pl-5 pt-1 pb-1 pr-1 flex justify-around bg-black mt-5">
                  <input
                    type="text"
                    placeholder="Generate  a unique referral link"
                    className="bg-black  w-full font-ZCOOLKuaiLe "
                    id="actives"
                  />
                  <button className="text-white bg-red-600 p-2 rounded-full" >
                    Generate
                  </button>
                </div>
                <div className="mt-5">
                  <img src={copyImf} alt="" />
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="font-ZCOOLKuaiLe text-white w-full sm:w-1/2 pt-5 pb-5">
            <div className=" relative border border-red-600 w-full sm:w-1/2 m-auto rounded-lg pt-5 pb-5">
              <p className="text-red-600 font-shojumaru gap-4 pt-10">
                PRESEAL 1
              </p>
              <p className="mt-5">1 Saviour = 0.657 USDT</p>
              <p className="mt-5">Next Stage Price = 0.723 USDT</p>
              <p className="mt-5">sold - $34,56,56,764/$50,00,00,000</p>
              <p className="mt-5">Raised - $34,56,56,764/$40,00,00,000</p>
              <input
                type="text"
                placeholder="Enter the Amount(BNB)"
                className="mt-5 bg-black border border-red-600 rounded-full p-3 "

              />{" "}
              <br />
              <input
                type="text"
                placeholder="Minimum Quantity to Buy"
                className="mt-5 bg-black border border-red-600 rounded-full p-3"
              />{" "}
              <br />
              <input
                type="text"
                placeholder="Maximum Quantity of Token"
                className="mt-5 bg-black border border-red-600 rounded-full p-3"
              />
              <div className="mt-5">
                <button className=" pt-2 pl-4 pr-4 pb-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 mr-5">
                  Buy
                </button>
                <button className=" pt-2 pl-4 pr-4 pb-2 bg-gradient-to-r from-red-600 to-red-700 rounded-full">
                  Claim Drop
                </button>
              </div>
              <div className="absolute left-[90px]  -top-6 flex justify-center gap-3 ">
                <div className="border border-red-600 flex justify-center items-center bg-black">
                  <p className="text-center font-mono text-5xl font-bold pl-1 pr-1 ">
                    0
                  </p>
                </div>
                <div className="border border-red-600   flex justify-center items-center bg-black font-mono text-5xl font-bold pl-1 pr-1">
                  <p>0</p>
                </div>
                <div>
                  <div>
                    <p className="text-red-600 font-bold flex justify-center items-center font-mono   ">
                      .
                    </p>
                  </div>
                  <div>
                    <p className="text-red-600 font-bold flex justify-center items-center font-mono  ">
                      .
                    </p>
                  </div>
                </div>
                <div className="border border-red-600 flex justify-center items-center bg-black font-mono text-5xl pl-1 pr-1 ">
                  <p>0</p>
                </div>
                <div className="border border-red-600  flex justify-center items-center bg-black font-mono text-5xl pl-1 pr-1 ">
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
