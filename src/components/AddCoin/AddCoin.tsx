import React, {FC} from 'react';
import style from "./style.module.scss"
import {IAllCoins} from "../../types/allCoins";

interface AddCoinProps {
    isOpen: boolean,
    currentCoin: IAllCoins,
    handleSetPortfolioCoin: any,
    handleSetQnt: any,
    setIsOpen: any,
}

const AddCoin: FC <AddCoinProps> = ({isOpen, setIsOpen, currentCoin, handleSetQnt, handleSetPortfolioCoin}) => {
    return (
        <div  className={isOpen ? style.modal : style.modal + " " + style.hide} onClick={() => setIsOpen(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                <div>
                    <span>Coin: </span>
                    <span>{currentCoin.name}</span>
                </div>

                <div>
                    <span>Price: </span>
                    <span>$ {Number(currentCoin.priceUsd).toFixed(6)}</span>
                </div>

                <div>
                    <span>Quantity: </span>
                    <input step='1' min={0} max={100} type="number" onChange={handleSetQnt} value={currentCoin.qnt}/>
                </div>

                <button onClick={handleSetPortfolioCoin}>Add</button>
            </div>
        </div>
    );
};

export default AddCoin;