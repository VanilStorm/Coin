import React, {FC} from 'react';
import style from "./style.module.scss"

const Main: FC = () => {
    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>

            <tbody>
            <tr onClick={() => console.log("BTC")}>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$30.000</td>
                <td>add</td>
            </tr>

            <tr onClick={() => console.log("BTC 2")}>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$30.000</td>
                <td>add</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$30.000</td>
                <td>add</td>
            </tr>

            <tr>
                <td>1</td>
                <td>Bitcoin</td>
                <td>$30.000</td>
                <td>add</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Main;