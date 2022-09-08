import React, {useEffect, useState} from 'react';
import Main from "../layout/Main";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useActions} from "../../../hooks/useActions";
import {IAllCoins} from "../../../types/allCoins";
import SingleCoinPage from "../../singleCoin/layout/singleCoinPage";

const MainContainer = () => {
    const {allCoins,singleCoin ,loading} = useTypeSelector(state => state.AllCoinsReducer);
    const {fetchAllCoins, fetchSingleCoin} = useActions();
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


    const coinsPerPage: number = 25;
    const limit: number = 100;

    const handlePageChange = (e: React.ChangeEvent<HTMLButtonElement>): void => {
        switch (e.target.name ) {
            case 'next': {
                if (pageNum === (limit/ coinsPerPage) - 1) {
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
            }
        }
    }

    const handleCoinFetch = (value: string): void => {
        fetchSingleCoin(value);
    }


    useEffect(() => {
        fetchAllCoins(coinsPerPage * pageNum);
    },[pageNum])


    if (allCoins.length && !coins.length) {
        setCoins(allCoins)
    }

    if (singleCoin.id && !coin.id) {
        setCoin(singleCoin)
    }

    if (singleCoin.id && coin.id) {
        return <SingleCoinPage/>
    }


    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <Main allCoins={allCoins} handlePageChange={handlePageChange}
                  handleCoinFetch={handleCoinFetch} pageNum={pageNum}/>
        </>
    );
};

export default MainContainer;