import React, {FC} from 'react';
import style from "./style.module.scss"
import HeaderContainer from "../Header/container/HeaderContainer";

interface MainLayoutProps {
    children: React.ReactNode,
}

const Layout: FC <MainLayoutProps>= ({children}) => {
    return (
        <div className={style.container}>
            <HeaderContainer/>
            {children}
        </div>
    );
};

export default Layout;