import backgroundImg from "../assets/Tokenomics_background_img.svg"
import tokenomicsLogo from "../assets/Tokenomics_img.svg"
import logo from "../assets/Logo_ Savior.svg";
export const Tokenomics = () =>{

    return <>
   <main className="pb-10 pt-10" style={{backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover', backgroundPosition: 'center'}} >
    <p className="text-red-600 text-3xl font-shojumaru p-10">Tokenomics</p>
    <div className="flex  flex-col md:flex-row justify-around items-center mt-10 ">
        <div className=" relative border border-red-600 w-full md:w-1/4   rounded-2xl text-center pt-10 pb-8 ">
            <table className="  text-white font-ZCOOLKuaiLe  text-center  p-3 w-full" >
                <tbody >
                <tr >
                    <td>Name</td>
                    <td><span className="text-red-600 ">Saviour</span></td>
                </tr> <br />
                <tr   >
                    <td>Symbol</td>
                    <td><span className="text-red-600">SVR</span></td>
                </tr><br />
                <tr>
                    <td>Total Supply</td>
                    <td><span className="text-red-600">100 Trillion</span></td>
                </tr><br />
                <tr>
                    <td>Decimals</td>
                    <td> <span className="text-red-600">18</span></td>
                </tr>
                </tbody>
                
            </table>
            <div className="font-shojumaru border border-red-600 rounded-lg p-3 text-white w-1/2 sm:w-1/2 bg-red-700 absolute top-[-25px]">  
                <p>Token Details</p>
            </div>
        </div>
        <div className=" relative w-full md:w-1/2 mt-[50px]">
            <img src={tokenomicsLogo} alt="Logo" className="" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-1/3"><img src={logo} alt="logo" className=" w-full object-cover" /></div>
        </div>
   

    </div>
   </main>
    </>
}