import React, {FC} from 'react';
import style from "./style.module.scss"
import PortfolioModal from "../../PortfolioModal/PortfolioModal";
import {IAllCoins} from "../../../types/allCoins";

interface HeaderProps {
    isPopup: boolean,
    topThreeCoins: IAllCoins[],
    singleCoin: IAllCoins,
    portfolioCoins: IAllCoins[],
    newCoinCosts: number,
    portfolioCost: number,
    handleDeleteCoin: any,
    setIsPopup: any,
}

const Header: FC <HeaderProps> = ({isPopup ,setIsPopup, topThreeCoins,
                                      portfolioCoins, handleDeleteCoin, portfolioCost,newCoinCosts}) => {

    return (
        <>
            <header className={style.header}>
                <div className={style.popularCoins}>
                    <span>Top coins:</span>
                    {topThreeCoins.length ? topThreeCoins.map(item => {
                        return (
                            <div key={item.id} className={style.coin}>{item.name}</div>
                        )
                    }) : <span>Loading...</span>}
                    <div className={style.portfolioValue}> | Portfolio cost:
                        $
                        {' '}
                        {localStorage['portfolio'] ? portfolioCost : 0}
                        {' Profit: '}
                        $ {localStorage['portfolio'] ? newCoinCosts > portfolioCost ? `+${(newCoinCosts - portfolioCost).toFixed(6)}`:
                            (newCoinCosts - portfolioCost).toFixed(6): '0 '}
                        ({localStorage['portfolio'] ? `${((newCoinCosts - portfolioCost) / (newCoinCosts * 100)).toFixed(6)}
                             %`: ' 0 %'})</div>
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