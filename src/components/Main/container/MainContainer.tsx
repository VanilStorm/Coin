import React, {useEffect, useState} from 'react';
import Main from "../layout/Main";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useActions} from "../../../hooks/useActions";
import {IAllCoins} from "../../../types/allCoins";
import {Navigate} from "react-router-dom";

const MainContainer = () => {
    const {allCoins,loading} = useTypeSelector(state => state.AllCoinsReducer);
    const [pageNum, setPageNum] = useState<number>(0);
    const [coins, setCoins] = useState<IAllCoins[]>([]);


    const coinsPerPage: number = 25;
    const pageVisited: number = pageNum * coinsPerPage;

    const displayCoinsPagination = coins.slice(pageVisited, pageVisited + coinsPerPage)

    const handlePageChange = (e: React.ChangeEvent<HTMLButtonElement>): void => {
        switch (e.target.name ) {
            case 'next': {
                if (pageNum === (allCoins.length / coinsPerPage) - 1) {
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

    const {fetchAllCoins} = useActions();

    useEffect(() => {
        fetchAllCoins();
    },[])


    if (allCoins.length && !coins.length) {
        setCoins(allCoins)
    }

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <Main allCoins={displayCoinsPagination} handlePageChange={handlePageChange} pageNum={pageNum}/>
        </>
    );
};

export default MainContainer;