import React, {FC, useEffect, useState} from 'react';
import Header from "../layout/Header";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {IAllCoins} from "../../../types/allCoins";
import {useActions, usePortfolioActions} from "../../../hooks/useActions";
import {setToDefaultCoin} from "../../../store/reducers/Coins/CoinsActions/CoinsAction";
import {IPortfolioCoins} from "../../../types/portfolioTypes";

const HeaderContainer: FC = () => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);
    const {allCoins,singleCoin} = useTypeSelector(state => state.AllCoinsReducer);
    const {setNewCoin} = usePortfolioActions();
    const {setToDefaultCoin} = useActions();
    const [topCoins, setTopCoins] = useState<IAllCoins[]>([]);

    if (allCoins.length && !topCoins.length) {
        const newArr = [...allCoins];
        newArr.length = 3;
        setTopCoins(newArr);
    }

    const handleSetCoin = (coin: IPortfolioCoins): void => {
        setNewCoin(coin);
    }

    return (
        <>
            <Header isPopup={isPopup} setIsPopup={setIsPopup} topThreeCoins={topCoins}
                    singleCoin={singleCoin} setToDefaultCoin={setToDefaultCoin}
            />
        </>
    );
};

export default HeaderContainer;