import React, { Fragment, useCallback, useEffect } from "react";
import { PublicKey } from '@solana/web3.js';
import {
  // useAnchorWallet,
  useWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

const MyWallet: React.FC = () => {
  const { publicKey, connect, disconnect, connected } = useWallet();
  

  const getOmittedAddr = (_address: PublicKey | null, _lengthLeft: number, _lengthRight: number) => {
    if (!_address) return ''; // Return empty string if address is null or undefined
  
    // Convert the address to a base58 string (commonly used string representation for Solana public keys)
    const addressStr = _address.toBase58();
  
    // Now you can safely use substring since addressStr is a string
    return (
      addressStr.substring(0, _lengthLeft) +
      " ... " +
      addressStr.substring(addressStr.length - _lengthRight)
    );
  };
  

  return (
    <Fragment>
      <div className="multi-wrapper">
        <span className="button-wrapper">
          <WalletModalProvider>
            <WalletMultiButton style={{ background: "none" }}>
              <div
                //   onClick={handleClick}
                className="btn-style"
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
                <span>
                  {" "}
                  {connected ? `${getOmittedAddr(publicKey, 5, 5)}` : "Connect Wallet"}
                </span>
                <div className="icon-wrapper">
                  <img
                    src="https://www.bullchartai.top/images/icons/btn-arrow-right.svg"
                    alt=""
                  />
                </div>
              </div>
            </WalletMultiButton>
          </WalletModalProvider>
        </span>
      </div>
    </Fragment>
  );
};

export default MyWallet;
