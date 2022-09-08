import React, {FC} from 'react';
import style from "./style.module.scss"
import PortfolioModal from "../../PortfolioModal/PortfolioModal";
import {IAllCoins} from "../../../types/allCoins";

interface HeaderProps {
    isPopup: boolean,
    topThreeCoins: IAllCoins[],
    singleCoin: IAllCoins,
    portfolioCoins: IAllCoins[],
    handleDeleteCoin: any,
    setToDefaultCoin: any,
    setIsPopup: any,
}

const Header: FC <HeaderProps> = ({isPopup ,setIsPopup, topThreeCoins,
                                      setToDefaultCoin, portfolioCoins, handleDeleteCoin}) => {

    return (
        <>
            <header className={style.header} onClick={() => {
                setToDefaultCoin();
            }}>
                <div className={style.popularCoins}>
                    <span>Top coins:</span>
                    {topThreeCoins.length ? topThreeCoins.map(item => {
                        return (
                            <div key={item.id} className={style.coin}>{item.name}</div>
                        )
                    }) : <span>Loading...</span>}
                    <div className={style.portfolioValue}>134,32 USD +2,38 (1,80 %)</div>
                </div>
                <div className={style.portfolio} onClick={(e) => {
                    e.stopPropagation();
                    setIsPopup(true);
                }}>
                    Coin portfolio
                </div>
            </header>

            <PortfolioModal isPopup={isPopup} setIsPopup={setIsPopup}
                            portfolioCoins={portfolioCoins} handleDeleteCoin={handleDeleteCoin}/>
        </>
    );
};

export default Header;