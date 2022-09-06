import React, {FC, useState} from 'react';
import Header from "../layout/Header";

const HeaderContainer: FC = () => {
    const [isPopup ,setIsPopup] = useState<boolean>(false);

    return (
        <>
            <Header isPopup={isPopup} setIsPopup={setIsPopup}/>
        </>
    );
};

export default HeaderContainer;