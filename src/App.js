import "./App.css";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import ShowSVG from './ShowSVG';
import Words from "./artifacts/contracts/Words.sol/Words.json";
import img from "./img.png";

const wordAddress = "0x22160237b20f80cb6ab26a37c5bca25ff45a3685";

function App() {
  const [size, setSize] = useState(0);
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  function m(num, decimals) {
    return BigNumber.from(num).mul(BigNumber.from(10).pow(decimals));
  }

  async function mint() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(wordAddress, Words.abi, signer);
      const transaction = await contract.mint(
        "&#10022;",
        "rgb(39,112,38)",
        "&#128757;",
        "为自己的投资留一辆电动车",
        "外卖币哥",
        "Words is opensource and free.",
        { value: m(size, 18) }
      );
      await transaction.wait();
    }
  }

  return (
    <div className="App">
      <div className="App-header"></div>
      <div className="App-content1">
        <div className="content1-wrap">
          <div>
            <div className="content1-title">Gift NFT FOR YOU</div>
            <div className="content1-text">
              This is an NFT gift from TropIC for you
            </div>
          </div>
          <div>
            <div className="content1-img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="App-content2">
        <div className="content2-warp">
          <div className="content2-logo-select">
            
            <div style={{marginBottom:"20px"}}>LOGO Select</div>
            <div>图标logo</div>
          </div>
          <div className="content2-logo-view">
            <div style={{marginBottom:"20px"}}>NFT Preview </div>
            
            <div>
             <ShowSVG />
            </div>
          </div>
          <div className="span-col-2">
            <div className="span-col-2-button" onClick={()=>setSize(size+1)}>Double Size * {size}</div>
            <div className="span-col-2-button" onClick={ async()=>await mint()}>Mint</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
