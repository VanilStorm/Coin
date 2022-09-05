import React, {FC, useState} from 'react';
import style from "./style.module.scss"
import PortfolioModal from "../PortfolioModal/PortfolioModal";

interface HeaderProps {

}

const Header: FC <HeaderProps> = ({}) => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);

    return (
        <>
            <header className={style.header}>
                <div className={style.popularCoins}>
                    <div className={style.coin}>popular coin</div>
                    <div className={style.coin}>popular coin</div>
                    <div className={style.coin}>popular coin</div>
                    <div className={style.portfolioValue}>134,32 USD +2,38 (1,80 %)</div>
                </div>
                <div className={style.portfolio} onClick={() => setIsPopup(true)}>
                    coin portfolio
                </div>
            </header>

            <PortfolioModal isPopup={isPopup} setIsPopup={setIsPopup}/>
        </>
    );
};

export default Header;