import React, {FC} from 'react';
import style from "./style.module.scss"
import {IAllCoins} from "../../../types/allCoins";

interface MainProps {
    allCoins: IAllCoins[],
    handlePageChange: any,
    pageNum: number,
}

const Main: FC <MainProps> = ({allCoins, handlePageChange, pageNum}) => {

    return (
        <>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                {allCoins.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>$ {Number(item.priceUsd).toFixed(6)}</td>
                            <td>Add</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <div className={style.buttons}>
                <button onClick={handlePageChange} name='prev'>Prev</button>
                <span><strong>{pageNum + 1}</strong></span>
                <button onClick={handlePageChange} name='next'>Next</button>
            </div>
        </>
    );
};

export default Main;