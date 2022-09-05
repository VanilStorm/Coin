import React, {FC} from 'react';
import Header from "../Header/Header";

interface MainLayoutProps {
    children: React.ReactNode,
}

const MainLayout: FC <MainLayoutProps>= ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default MainLayout;