import React, {FC} from 'react';
import style from "./style.module.scss"
import {IAllCoins} from "../../types/allCoins";

interface PortfolioModalProps {
    isPopup: boolean,
    portfolioCoins: any,
    setIsPopup: any,
}

const PortfolioModal: FC <PortfolioModalProps> = ({isPopup, setIsPopup, portfolioCoins}) => {

    return (
        <div className={isPopup ? style.modal : style.modal + " " + style.hide} onClick={() => setIsPopup(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                {portfolioCoins.map((item: IAllCoins) => {
                    return (
                        <div className={style.coinParams}>
                            <div>
                                <span> <b>Coin:</b> {item.name}</span>
                                <span> <b>Quantity:</b> {item.qnt}</span>
                                <span> <b>Cost:</b> $ {Number(Number(item.qnt) * Number(item.priceUsd)).toFixed(6)}</span>
                            </div>

                            <button>Delete</button>
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default PortfolioModal;