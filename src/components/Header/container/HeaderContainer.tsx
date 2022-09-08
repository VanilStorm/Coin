import React, {FC, useEffect, useState} from 'react';
import Header from "../layout/Header";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {IAllCoins} from "../../../types/allCoins";
import {useActions} from "../../../hooks/useActions";
import {setToDefaultCoin} from "../../../store/reducers/Coins/CoinsActions/CoinsAction";

const HeaderContainer: FC = () => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);
    const [portfolioCoins, setPortfolioCoins] = useState<IAllCoins[]>([])
    const {allCoins,singleCoin} = useTypeSelector(state => state.AllCoinsReducer);
    const {portfolio} = useTypeSelector(state => state.PortfolioReducer);
    const {setToDefaultCoin} = useActions();
    const [topCoins, setTopCoins] = useState<IAllCoins[]>([]);

    if (allCoins.length && !topCoins.length) {
        const newArr = [...allCoins];
        newArr.length = 3;
        setTopCoins(newArr);
    }

    useEffect(() => {
        if (localStorage['portfolio']) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');
            console.log(items)
            setPortfolioCoins(items);
        } else {
            console.log(portfolio)
            setPortfolioCoins(portfolio);
        }
    }, [portfolio.length])

    return (
        <>
            <Header isPopup={isPopup} setIsPopup={setIsPopup} topThreeCoins={topCoins}
                    singleCoin={singleCoin} setToDefaultCoin={setToDefaultCoin}
                    portfolioCoins={portfolioCoins}
            />
        </>
    );
};

export default HeaderContainer;