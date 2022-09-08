import React, {FC, useEffect, useState} from 'react';
import Header from "../layout/Header";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {IAllCoins} from "../../../types/allCoins";
import {useActions, usePortfolioActions} from "../../../hooks/useActions";
import {deleteCoin} from "../../../store/reducers/Portfolio/PortfolioActions/PortfolioActions";

const HeaderContainer: FC = () => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);
    const [portfolioCost, setPortfolioCost] = useState<number>(0);
    const [portfolioCoins, setPortfolioCoins] = useState<IAllCoins[]>([]);
    const [topCoins, setTopCoins] = useState<IAllCoins[]>([]);
    const [newCoinCosts, setNewCoinCosts] = useState<number>(0);
    const {allCoins,singleCoin, currentCoins, loading} = useTypeSelector(state => state.AllCoinsReducer);
    const {portfolio} = useTypeSelector(state => state.PortfolioReducer);
    const {fetchCurrentCoin} = useActions();
    const {deleteCoin} = usePortfolioActions();

    if (allCoins.length && !topCoins.length) {
        const newArr = [...allCoins];
        newArr.length = 3;
        setTopCoins(newArr);
    }

    useEffect(() => {
        if (localStorage['portfolio']) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');

            setPortfolioCost(items.reduce((acc: number, item: IAllCoins) => {
                return acc + (Number(item.qnt) * Number(item.priceUsd) );
            }, 0).toFixed(6))
        }
    }, [localStorage['portfolio']])

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

    useEffect(() => {
        if (localStorage['portfolio']) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');
            items.forEach((item: IAllCoins) => {
                fetchCurrentCoin(item.id);
            })
            setNewCoinCosts(0);
        }

    },[])


    useEffect(() => {
        if (!newCoinCosts && currentCoins.length) {

            const items = JSON.parse(localStorage.getItem('portfolio') || '');
            const qnts = items.reduce((acc: any, item: any) => {
                acc[item.id] = item.qnt;
                return acc;
            },{})

            setNewCoinCosts(currentCoins.reduce((acc: number, item: IAllCoins) => {
                return acc + (Number(qnts[item.id]) * Number(item.priceUsd) )
            }, 0).toFixed(6))
        }
    },[currentCoins.length])


    console.log('New',newCoinCosts);
    console.log('Old',portfolioCost);

    return (
        <>
            <Header isPopup={isPopup} setIsPopup={setIsPopup} topThreeCoins={topCoins}
                    singleCoin={singleCoin} portfolioCoins={portfolioCoins}
                    handleDeleteCoin={handleDeleteCoin} portfolioCost={portfolioCost}
                    newCoinCosts={newCoinCosts}
            />
        </>
    );
};

export default HeaderContainer;