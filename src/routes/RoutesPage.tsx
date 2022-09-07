import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import MainContainer from "../components/Main/container/MainContainer";

const RoutesPage: FC = () => {
    return (
        <Routes>
            <Route path="*" element={<MainContainer/>}/>
        </Routes>
    );

};

export default RoutesPage;