import React, {FC} from 'react';
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import style from "./style.module.scss"
import Chart from "../../chart/chart";
import {useActions} from "../../../hooks/useActions";


const SingleCoinPage: FC = () => {
    const {singleCoin} = useTypeSelector((state) => state.AllCoinsReducer);
    const {setToDefaultCoin} = useActions();

    if (!singleCoin.id) {
        return <h2>Loading...</h2>
    }


    return (
        <div>
            <div className={style.fields}>
                <div className={style.field}>
                    <span>Rank:</span>
                    <span> {singleCoin.rank}</span>
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

            <Chart/>

            <button onClick={() => setToDefaultCoin()}>Back</button>
        </div>
    );
};

export default SingleCoinPage;