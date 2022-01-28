import "./App.css";
import "emoji-mart/css/emoji-mart.css";
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ShowSVG from "./ShowSVG";
import Words from "./artifacts/contracts/Words.sol/Words.json";
import img from "./img.png";
import { Picker } from "emoji-mart";

const wordAddress = "0x22160237b20f80cb6ab26a37c5bca25ff45a3685";

function App() {
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("rgb(39,112,38)");
  const [author, setAuthor] = useState("cryptoer");
  const [text, setText] = useState("this gift for you");
  const [emoji, setEmoji] = useState("🎉");

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);

  function utf16toEntities(str) {
    var patt = /[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则
    return str.replace(patt, function (char) {
      var H, L, code;
      if (char.length === 2) {
        H = char.charCodeAt(0); // 取出高位
        L = char.charCodeAt(1); // 取出低位
        code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00; // 转换算法
        console.log("&#" + code + ";");
        return "&#" + code + ";";
      } else {
        console.log(char);
        return char;
      }
    });
  }
  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };
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
        color,
        utf16toEntities(emoji),
        text,
        author,
        "Words is opensource and free.",
        { value: m(size, 18) }
      );
      await transaction.wait();
      window.alert("Mint Success, please go to Opensea to view your NFT")
    }
  }

  return (
    <div className="App">
      <div className="App-header">
      
        {defaultAccount ? (
          <div style={{ margin: "30px" }}>{defaultAccount}</div>
        ) : (
          <div className="connect-button" onClick={connectWalletHandler}>
            {connButtonText} 
          </div>
        )}
        <div style={{ margin: "30px" }}>Please Switch Polygon(Matic) Network</div>
      </div>
      <div className="App-content1">
        <div className="content1-wrap">
          <div>
            <div className="content1-title">Words</div>
            <div className="content1-text">
              Words One NFT.
              <br/>
              One story Mint your story. 
              <br/>
              Let the world remember.
              <br/>
              Co-authoring our "Tales from the thousand and one nights"
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
            <div style={{ marginBottom: "20px" }}>NFT Option</div>
            <div>
              <input
                defaultValue={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                defaultValue={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Picker onSelect={(emoji) => setEmoji(emoji.native)} />
            </div>
          </div>
          <div className="content2-logo-view">
            <div style={{ marginBottom: "20px" }}>NFT Preview </div>

            <div>
              <ShowSVG author={author} emoji={emoji} text={text} size={size} />
            </div>
          </div>
          <div className="span-col-2">
            <div
              className="span-col-2-button"
              onClick={() => setSize(size + 1)}
            >
              Double Size * {size}
            </div>
            <div
              className= {defaultAccount?"span-col-2-button":"span-col-2-button-disable"}
             
              onClick={defaultAccount?async () => await mint():null}
            >
              Mint
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
