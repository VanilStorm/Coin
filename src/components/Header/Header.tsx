import React, {FC} from 'react';
import style from "./style.module.scss"

interface HeaderProps {

}

const Header: FC <HeaderProps> = ({}) => {
    return (
        <header className={style.header}>
            <div className={style.popularCoins}>
                <div className={style.coin}>popular coin</div>
                <div className={style.coin}>popular coin</div>
                <div className={style.coin}>popular coin</div>
                <div className={style.portfolioValue}>134,32 USD +2,38 (1,80 %)</div>
            </div>
            <div className={style.portfolio}>
                coin portfolio
            </div>
        </header>
    );
};

export default Header;