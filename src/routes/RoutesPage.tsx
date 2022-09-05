import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../components/Main/Main";

const RoutesPage: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    );

};

export default RoutesPage;