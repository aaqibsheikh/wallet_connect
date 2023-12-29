import React, { Fragment } from 'react';
import {
    // useAnchorWallet,
    // useWallet, 
    useConnection,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider, 
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const MyWallet: React.FC = () => {
    // const { connection } = useConnection(); 

    return (
        <Fragment>  
            <div className="multi-wrapper">
                <span className="button-wrapper">
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </span> 
            </div>
        </Fragment>
    );
};

export default MyWallet;
