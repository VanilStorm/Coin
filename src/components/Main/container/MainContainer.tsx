import React, {useEffect, useState} from 'react';
import Main from "../layout/Main";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useActions, usePortfolioActions} from "../../../hooks/useActions";
import {IAllCoins} from "../../../types/allCoins";
import SingleCoinPage from "../../singleCoin/layout/singleCoinPage";

const MainContainer = () => {
    const {allCoins,singleCoin ,loading} = useTypeSelector(state => state.AllCoinsReducer);
    const {fetchAllCoins, fetchSingleCoin} = useActions();
    const {setNewCoin} = usePortfolioActions()
    const [pageNum, setPageNum] = useState<number>(0);
    const [coins, setCoins] = useState<IAllCoins[]>([]);
    const [coin, setCoin] = useState<IAllCoins>({
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
    })
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentCoin, setCurrentCoin] = useState<IAllCoins>({
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
        qnt: '',
    })

    useEffect(() => {
        fetchAllCoins(coinsPerPage * pageNum);
    },[pageNum])

    const coinsPerPage: number = 25;
    const limit: number = 100;
    const pages: number = limit / coinsPerPage;

    const handlePageChange = (e: React.ChangeEvent<HTMLButtonElement>): void => {
        switch (e.target.name ) {
            case 'next': {
                if (pageNum === (limit / coinsPerPage) - 1) {
                    return;
                } else {
                    setPageNum((num) => num + 1)
                }
                break;
            }

            case 'prev': {
                if (pageNum === 0) {
                    return;
                } else {
                    setPageNum((num) => num - 1)
                }
                break;
            }
        }
    }

    const handleCoinFetch = (value: string): void => {
        fetchSingleCoin(value);
    }

    const handleCurrentCoin = (coin: IAllCoins): void => {
        setCurrentCoin(coin);
    }

    const handleSetQnt = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (!currentCoin.id) {
            setCurrentCoin(() => ({...singleCoin, qnt: e.target.value}))
        } else {
            setCurrentCoin((coin) => ({...coin, qnt: e.target.value}))
        }
    }

    const handleSetPortfolioCoin = () => {
        if (!currentCoin.qnt || Number(currentCoin.qnt) <= 0) {
            alert("Enter a valid value!");
            return;
        }

        if (currentCoin.id && currentCoin.qnt) {
            setNewCoin(currentCoin);
        }

        if (localStorage["portfolio"]) {
            const items = JSON.parse(localStorage.getItem('portfolio') || '');

            if (items) {
                localStorage.setItem("portfolio", JSON.stringify([...items, currentCoin]));
            } else {
                localStorage.setItem("portfolio", JSON.stringify([currentCoin]));
            }
        } else {
            localStorage.setItem("portfolio", JSON.stringify([currentCoin]));
        }


        setCurrentCoin({
            id: '',
            rank: '',
            symbol: '',
            name: '',
            supply: '',
            maxSupply: '',
            marketCapUsd: '',
            volumeUsd24Hr: '',
            priceUsd: '',
            qnt: '',
        });
        setIsOpen(false);
    }

    const handleSetDefaultCoin = () => {
        setCurrentCoin({
            id: '',
            rank: '',
            symbol: '',
            name: '',
            supply: '',
            maxSupply: '',
            marketCapUsd: '',
            volumeUsd24Hr: '',
            priceUsd: '',
            qnt: '',
        });
    }

    if (allCoins.length && !coins.length) {
        setCoins(allCoins)
    }

    if (singleCoin.id && !coin.id) {
        setCoin(singleCoin)
    }

    if (singleCoin.id && coin.id) {
        return <SingleCoinPage singleCoin={singleCoin} handleSetQnt={handleSetQnt}
                               currentCoin={currentCoin} handleSetPortfolioCoin={handleSetPortfolioCoin}
                               handleSetDefaultCoin={handleSetDefaultCoin}
        />
    }



    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <Main allCoins={allCoins} handlePageChange={handlePageChange}
                  handleCoinFetch={handleCoinFetch} pageNum={pageNum} pages={pages} isOpen={isOpen}
                  setIsOpen={setIsOpen} handleCurrentCoin={handleCurrentCoin} currentCoin={currentCoin}
                  handleSetQnt={handleSetQnt} handleSetPortfolioCoin={handleSetPortfolioCoin}
            />
        </>
    );
};

export default MainContainer;