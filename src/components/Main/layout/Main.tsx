import React, {FC} from 'react';
import style from "./style.module.scss"
import {IAllCoins} from "../../../types/allCoins";
import AddCoin from "../../AddCoin/AddCoin";

interface MainProps {
    allCoins: IAllCoins[],
    pages: number,
    isOpen: boolean,
    handlePageChange: any,
    handleCoinFetch: any,
    setIsOpen: any,
    pageNum: number,
}

const Main: FC <MainProps> = ({allCoins, handlePageChange, pageNum,
                                  handleCoinFetch, pages, isOpen, setIsOpen}) => {

    return (
        <>
            <table className={style.table}>
                <thead>
                <tr>
                    <th><b>Rank</b></th>
                    <th><b>Name</b></th>
                    <th><b>Price</b></th>
                </tr>
                </thead>

                <tbody>
                {allCoins.map(item => {
                    return (
                        <tr className={style.tableRow} key={item.id} onClick={() => handleCoinFetch(item.id)}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>$ {Number(item.priceUsd).toFixed(6)}</td>
                            <td onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(true);
                            }}>+</td>
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

            <AddCoin isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    );
};

export default Main;