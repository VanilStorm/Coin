import React, {FC} from 'react';
import style from "./style.module.scss"
import Header from "../Header/Header";

interface MainLayoutProps {
    children: React.ReactNode,
}

const Layout: FC <MainLayoutProps>= ({children}) => {
    return (
        <div className={style.container}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;