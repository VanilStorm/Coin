import React, {FC} from 'react';
import style from "./style.module.scss"
import Chart from "../../chart/chart";
import {useActions} from "../../../hooks/useActions";
import {IAllCoins} from "../../../types/allCoins";

interface SingleCoinProps {
    currentCoin: IAllCoins,
    singleCoin: IAllCoins,
    handleSetPortfolioCoin: any,
    handleSetDefaultCoin: any,
    handleSetQnt: any,
}


const SingleCoinPage: FC <SingleCoinProps> = ({handleSetQnt, currentCoin,
                                                  singleCoin, handleSetPortfolioCoin,
                                                  handleSetDefaultCoin}) => {
    const {setToDefaultCoin} = useActions();

    if (!singleCoin.id) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            <div className={style.params}>
                <div className={style.fields}>
                    <div>
                        <span>Rank: </span>
                        <span>{singleCoin.rank}</span>
                    </div>
                    <div>
                        <span>Name: </span>
                        <span>{singleCoin.name}</span>
                    </div>
                    <div>
                        <span>Price: </span>
                        <span>$ {Number(singleCoin.priceUsd).toFixed(6)}</span>
                    </div>
                    <div>
                        <span>Market cap (USD): </span>
                        <span>$ {Number(singleCoin.marketCapUsd).toFixed(6)}</span>
                    </div>
                </div>

                <div className={style.inputField}>
                    <input type="number" placeholder='Example 1.542' onChange={handleSetQnt} value={currentCoin.qnt}/>
                    <button onClick={() => {
                        handleSetPortfolioCoin();
                        setToDefaultCoin();
                    }}>Add</button>
                </div>
            </div>

            <Chart/>

            <button onClick={() => {
                handleSetDefaultCoin()
                setToDefaultCoin()
            }}>Back</button>
        </div>
    );
};

export default SingleCoinPage;