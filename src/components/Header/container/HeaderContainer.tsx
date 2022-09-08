import React, {FC, useEffect, useState} from 'react';
import Header from "../layout/Header";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {IAllCoins} from "../../../types/allCoins";
import {useActions, usePortfolioActions} from "../../../hooks/useActions";
import {setToDefaultCoin} from "../../../store/reducers/Coins/CoinsActions/CoinsAction";
import {deleteCoin} from "../../../store/reducers/Portfolio/PortfolioActions/PortfolioActions";

const HeaderContainer: FC = () => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);
    const [portfolioCoins, setPortfolioCoins] = useState<IAllCoins[]>([])
    const {allCoins,singleCoin} = useTypeSelector(state => state.AllCoinsReducer);
    const {portfolio} = useTypeSelector(state => state.PortfolioReducer);
    const {deleteCoin} = usePortfolioActions();
    const [topCoins, setTopCoins] = useState<IAllCoins[]>([]);

    if (allCoins.length && !topCoins.length) {
        const newArr = [...allCoins];
        newArr.length = 3;
        setTopCoins(newArr);
    }

    useEffect(() => {
        if (localStorage['portfolio']) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');
            setPortfolioCoins(items);
        } else {
            setPortfolioCoins(portfolio);
        }
    }, [portfolio.length, localStorage['portfolio']])

    const handleDeleteCoin = (value: string) => {
        if (localStorage['portfolio']) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');

            const newArr = items.filter((item: IAllCoins) => item.name !== value);
            localStorage.setItem('portfolio', JSON.stringify(newArr));

            if (items.length <= 1) {
                localStorage.removeItem('portfolio');
            }
        }
        deleteCoin(value);
    }

    return (
        <>
            <Header isPopup={isPopup} setIsPopup={setIsPopup} topThreeCoins={topCoins}
                    singleCoin={singleCoin} portfolioCoins={portfolioCoins}
                    handleDeleteCoin={handleDeleteCoin}
            />
        </>
    );
};

export default HeaderContainer;