import React, { Fragment, useState, useEffect } from "react";
import Moralis from "moralis";
import Select, { components } from "react-select";

import MyWallet from "../../MyWallet";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "reactjs-popup/dist/index.css";


const customStyles = {
  container: (provided, state) => ({
    ...provided,
    // height: "auto",
    // width: 130,
    // borderRadius: 10,
    // border: "1px solid rgba(221, 255, 135, 0.432)",
    // marginBottom: 15,
    // padding: 10,
    // color: "#ffffff79",
    // textAlign: "left",
    // backgroundColor: "#000",
    // height: 50,
    zIndex: 10000,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FFFFFF' : provided.backgroundColor,
    color: state.isFocused ? '#000000' : provided.color,
   
    //   padding: 10,
    // color: "#00000ff",
    zIndex: 10000,
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: 130,
    borderRadius: 10,
    border: "1px solid rgba(221, 255, 135, 0.432)",
    // marginBottom: 15,
    // padding: 10,
    color: "#ffffff79",
    textAlign: "left",
    backgroundColor: "#000",
    height: 50,
  }),
  input: (baseStyles, state) => ({
    ...baseStyles,
    height: "35px",
    "& input": {
      height: "35px !important",
    },
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  singleValue: (provided, state) => {
    const opacity = 0.5;
    const transition = "opacity 300ms";
    const color = "#FFFFFF";

    return { ...provided, opacity, transition, color };
  },
  menu: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    backgroundColor: "#000000",
    color: "#FFFFFF",
  }),
};

const getOmittedAddr = (_address, _lengthLeft, _lengthRight) => {
  return (
    _address?.substring(0, _lengthLeft) +
    " ... " +
    _address?.substring(_address?.length - _lengthRight)
  );
};
const MainBoard = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenList, setTokenList] = useState([]);

  const [componentButtonClick, setComponentButtonClick] = useState(false);
  const click_connect_btn = () => {
    setComponentButtonClick(true);
  };

  const fetchTokenInfo = async () => {
    try {
      // Check if the tokenAddress is already in the tokenList
      const tokenExists = tokenList.some(
        (token) => token.address.toLowerCase() === tokenAddress.toLowerCase()
      );

      if (tokenExists) {
        console.log("Token already exists in the list.");
        // Reset the input field
        setTokenAddress("");

        // Close the modal
        document.getElementById("addTokenModalClose").click();
        return; // Stop the function here
      }

      const response = await Moralis.SolApi.token.getTokenPrice({
        network: "mainnet",
        address: tokenAddress,
      });

      console.log("response", response.raw);
      setTokenList((prevTokens) => [
        ...prevTokens,
        {
          value: response.raw.nativePrice.symbol,
          label: response.raw.nativePrice.symbol,
          address: tokenAddress, // Store the address as well for comparison
        },
      ]);

      // Reset the input field
      setTokenAddress("");

      // Close the modal
      document.getElementById("addTokenModalClose").click();
    } catch (e) {
      console.error(e);
    }
  };

  const handleToken = (selectedOption) => {
    console.log(`Token selected:`, selectedOption.value);
    // Update state or perform other actions with the selected token
  };

  return (
    <Fragment>
      <div className="page">
        <div className="top-header">
          <header className="logo-part">
            <a href="/" className="logo">
              <img src="./assets/images/logo.svg" alt=" logo" />
            </a>
          </header>
          <div>
            <ul className="text-part">
              <li>
                <a href="#" style={{ textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">ETH</a>
              </li>
              <li>
                <a href="#">Binance</a>
              </li>
              <MyWallet />
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2">
            <div className="sidebar">
              <nav>
                <div className="nav-item active">
                  <a className="nav-link" href="/">
                    <span className="nav-icon">
                      <span className="solid">
                        <i className="fas fa-th-large"></i>
                      </span>
                      <span className="light">
                        <i className="fal fa-th-large"></i>
                      </span>
                    </span>
                    <span className="nav-text">Dashboard</span>
                  </a>
                </div>
                <div className="nav-item ">
                  <a className="nav-link" href="/profile">
                    <span className="nav-icon">
                      <span className="solid">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <span className="light">
                        <i className="fa-solid fa-user"></i>
                      </span>
                    </span>
                    <span className="nav-text">Profile</span>
                  </a>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fa-solid fa-clipboard"></i>
                        How it Works?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse "
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        1 : Identify Token to Buy:
                        <br />
                        Identify a Crypto Project. Create a campaign with
                        BullChartAI engine. Choose the total amount to invest.
                        ex: 5 ETH , 10 ETH etc. Publish the campaign.
                        <br /> <br />
                        2 : Notify Token Holders
                        <br />
                        Token holders will receive notification about the new
                        campaign. If they are interested, they can invest in the
                        campaign by sending Ether to our AI Engine.
                        <br />
                        3. Once the Buy Limit is reached, BullChartAI engine
                        will analyze the Project
                        <br /> <br />
                        4 : Distribute funds to Anonymous Wallets
                        <br />
                        Collect ether from BullChartAI’s treasury, divide the
                        total ether to a random amount using AI Engine utilizing
                        ML history, transfer Ether to multiple newly generated
                        anonymous wallets using Zk SNARK algorithm. These
                        transactions are anonymous and cannot be traced to the
                        original wallet.
                        <br /> <br />
                        5: Anonymous Simultaneous Buy
                        <br />
                        BullChartAI’s TAO AI engine will start buying the token
                        simultaneously from all the newly generated wallets
                        creating a bullish green candle and a bullish divergence
                        in the chart.
                        <br /> <br />
                        6: Profit Realization &amp; Distribution
                        <br />
                        Campaign Creator will decide when to sell the token
                        depending on the price action. After the profit is
                        calculated, profit is evenly distributed among the
                        contributors. 5% of the profit will be rewarded to the
                        campaign creator. 5% will be allocated to BullChartAI
                        treasury.
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="main-content">
              <div className="row">
                <div className="col-lg-12">
                  <h2>BullChartAI Dashboard</h2>
                </div>
                <span style={{ color: "white" }}>No Projects</span>
              </div>
              <div className="row create-campaign-box ">
                <h4>Create a Campaign: 50,000 $BullAI</h4>

                <div className="row box">
                  <div className="col-lg-5">
                    <div className="d-flex center-box">
                      <p className="token-name">Token: </p>
                      <Select
                        name="tokens"
                        options={tokenList}
                        getOptionLabel={(option) => option.label} // This ensures only the symbol is shown
                        styles={customStyles}
                        onChange={handleToken}
                      />

                      <div
                        className="btn-style"
                        data-bs-toggle="modal"
                        data-bs-target="#addTokenModal"
                        style={{ cursor: "pointer", marginLeft: 10 }}
                      >
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <div className="icon-wrapper">
                          <img
                            src="https://www.bullchartai.top/images/icons/btn-arrow-left.svg"
                            alt=""
                          />
                        </div>
                        <span>Add Token</span>
                        <div className="icon-wrapper">
                          <img
                            src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex" style={{ marginLeft: 20 }}>
                    <p>Max SOL:</p>
                    <div className="dropdown">
                      <input
                        type="number"
                        id="in_amt_total"
                        min="0"
                        max="1000"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="btn-style" style={{ cursor: "pointer" }}>
                      <span> </span>
                      <span> </span>
                      <span> </span>
                      <span> </span>
                      <div className="icon-wrapper">
                        <img
                          src="https://www.bullchartai.top/images/icons/btn-arrow-left.svg"
                          alt=""
                        />
                      </div>
                      <span>Create Campaign</span>
                      <div className="icon-wrapper">
                        <img
                          src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="addTokenModal"
                tabIndex="-1"
                aria-labelledby="addTokenModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="addTokenModalLabel">
                        Add Token
                      </h5>
                      <button
                        type="button"
                        id="addTokenModalClose"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <input
                          type="text"
                          style={{ width: "92%" }}
                          value={tokenAddress}
                          onChange={(e) => setTokenAddress(e.target.value)}
                        />

                        <i className="fas fa-spinner fa-pulse fa-1x ml-10"></i>
                        <div style={{ height: 25 }}></div>
                      </div>
                      <div>
                        <div
                          className="btn-style"
                          onClick={fetchTokenInfo}
                          style={{ cursor: "pointer" }}
                        >
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <div className="icon-wrapper">
                            <img
                              src="https://www.bullchartai.top/images/icons/btn-arrow-left.svg"
                              alt=""
                            />
                          </div>
                          <span>Import Token</span>
                          <div className="icon-wrapper">
                            <img
                              src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="data-table">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <h2>BullChartAI Campaigns</h2>
                    </div>
                    <div className="table-box">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Token </th>
                            <th>Campaign </th>
                            <th>SOL Amount</th>
                            <th>Profit Percentage</th>
                            <th>Invested Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              colspan="7"
                              style={{
                                textAlign: "center",
                                verticalAlign: "middle",
                              }}
                            >
                              <span>No Campign Data</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="row invest">
                      <div className="col-lg-3">
                        <h5>Enter SOL Amount</h5>
                      </div>
                      <div className="col-lg-4">
                        <input
                          type="number"
                          placeholder="Investing SOL amount"
                          min="0"
                          max="1000"
                          style={{ marginLeft: 0, width: "100%" }}
                        />
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="btn-style"
                          style={{ cursor: "pointer", marginLeft: 20 }}
                        >
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <div className="icon-wrapper">
                            <img
                              src="https://www.bullchartai.top/images/icons/btn-arrow-left.svg"
                              alt=""
                            />
                          </div>
                          <span>Invest Now</span>
                          <div className="icon-wrapper">
                            <img
                              src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    </Fragment>
  );
};

export default MainBoard;
