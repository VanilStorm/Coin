import React, {useEffect} from 'react';
import Main from "../layout/Main";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useActions} from "../../../hooks/useActions";

const MainContainer = () => {
    const {allCoins,loading} = useTypeSelector(state => state.AllCoinsReducer);

    const {fetchAllCoins} = useActions();

    useEffect(() => {
        fetchAllCoins();
    },[])

    if (loading) {
        return <h2>Loading</h2>
    }

    return (
        <>
            <Main allCoins={allCoins} loading={loading}/>
        </>
    );
};

export default MainContainer;