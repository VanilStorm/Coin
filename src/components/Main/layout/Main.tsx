import React, {FC} from 'react';
import style from "./style.module.scss"
import {IAllCoins} from "../../../types/allCoins";

interface MainProps {
    allCoins: IAllCoins[],
    pages: number,
    handlePageChange: any,
    handleCoinFetch: any,
    pageNum: number,
}

const Main: FC <MainProps> = ({allCoins, handlePageChange, pageNum,
                                  handleCoinFetch, pages}) => {

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
                        <tr className={style.tableRow} key={item.id} onClick={() => handleCoinFetch(item.id)}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>$ {Number(item.priceUsd).toFixed(6)}</td>
                            <td onClick={(e) => e.stopPropagation()}>+</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <div className={style.buttons}>
                <button className={(pageNum + 1) === 1 && style.hidden} onClick={handlePageChange} name='prev'>Prev</button>
                <span><strong>{pageNum + 1} of {pages}</strong></span>
                <button className={(pageNum + 1) === pages && style.hidden} onClick={handlePageChange} name='next'>Next</button>
            </div>
        </>
    );
};

export default Main;