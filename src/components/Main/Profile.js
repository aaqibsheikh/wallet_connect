import React, { Fragment } from 'react';
import MyWallet from "../../MyWallet";

import 'react-notifications/lib/notifications.css';
import 'reactjs-popup/dist/index.css';
const Profile = () => {
    return (
        <Fragment>
            <div className="page profile">
                <div className="top-header">
                    <header className="logo-part">
                        <a href="/" className="logo">
                            <img src="./assets/images/logo.svg" alt=" logo" />
                        </a>
                    </header>
                    <div>
                        <ul className="text-part">
                            <li><a href="#" style={{ textDecoration: 'none' }}>Home</a></li>
                            <li><a href="#">ETH</a></li>
                            <li><a href="#">Binance</a></li>
                            <MyWallet />
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="sidebar">
                            <nav>
                                <div className="nav-item ">
                                    <a className="nav-link" href="/">
                                        <span className="nav-icon">
                                            <span className="solid"><i className="fas fa-th-large"></i></span>
                                            <span className="light"><i className="fas fa-th-large"></i></span>
                                        </span>
                                        <span className="nav-text">Dashboard</span>
                                    </a>
                                </div>
                                <div className="nav-item active">
                                    <a className="nav-link" href="/profile">
                                        <span className="nav-icon">
                                            <span className="solid"><i className="fa-solid fa-user"></i></span>
                                            <span className="light"><i className="fa-solid fa-user"></i></span>
                                        </span>
                                        <span className="nav-text">Profile</span>
                                    </a>
                                </div>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="true" aria-controls="collapseOne">
                                                How it Works?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                1 : Identify Token to Buy:
                                                <br />
                                                Identify a Crypto Project. Create a campaign with BullChartAI engine. Choose the total amount to invest.  ex: 5 ETH , 10 ETH etc. Publish the campaign.

                                                <br /> <br />
                                                2 : Notify Token Holders
                                                <br />
                                                Token holders will receive notification about the new campaign. If they are interested, they can invest in the campaign by sending Ether to our AI Engine.
                                                <br />
                                                3. Once the Buy Limit is reached, BullChartAI engine will analyze the Project
                                                <br /> <br />
                                                4 : Distribute funds to Anonymous Wallets
                                                <br />
                                                Collect ether from BullChartAI’s treasury, divide the total ether to a random amount using AI Engine utilizing ML history, transfer Ether to multiple newly  generated anonymous wallets using Zk SNARK algorithm. These transactions are anonymous and cannot be traced to the original wallet.
                                                <br /> <br />
                                                5: Anonymous Simultaneous Buy
                                                <br />
                                                BullChartAI’s TAO AI engine will start buying the token simultaneously from all the newly generated wallets creating a  bullish green candle and a bullish divergence in the chart.
                                                <br /> <br />
                                                6: Profit Realization & Distribution
                                                <br />
                                                Campaign Creator will decide when to sell the token depending on the price action. After the profit is calculated, profit is evenly distributed among the contributors. 5% of the profit will be rewarded to the campaign creator. 5% will be allocated to BullChartAI treasury.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="profile-content">
                            <h2>Personal Dashboard</h2>
                            <div className="row design">
                                <span>No Campign Data</span>
                                <div className="col-lg-6 ">
                                    <div className="data-table">
                                        <div className="table-wrapper">
                                            <div className="table-title">
                                                <div className="table-box">
                                                    <table className="table table-striped table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Campaign Name </th>
                                                                <th>Total Earned Profit </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>BullsChartAI</td>
                                                                <td>1 SOL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>ChainLink</td>
                                                                <td>5 SOL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Profit</td>
                                                                <td>6 SOL</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Profit Claimed</td>
                                                                <td>6 SOL</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="btn-style" style={{ cursor: "pointer" }}>
                                                    <span> </span>
                                                    <span> </span>
                                                    <span> </span>
                                                    <span> </span>
                                                    <div className="icon-wrapper">
                                                        <img src="https://www.bullchartai.top/images/icons/btn-arrow-left.svg" alt="" />
                                                    </div>
                                                    <span>Claim Porfit in SOL</span>
                                                    <div className="icon-wrapper">
                                                        <img src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg" alt="" />
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
            </div>
        </Fragment>
    )
}

export default Profile;