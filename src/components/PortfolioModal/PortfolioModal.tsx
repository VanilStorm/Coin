import React, {FC} from 'react';
import style from "./style.module.scss"

interface PortfolioModalProps {
    isPopup: boolean,
    setIsPopup: any,
}

const PortfolioModal: FC <PortfolioModalProps> = ({isPopup, setIsPopup}) => {
    return (
        <div className={isPopup ? style.modal : style.modal + " " + style.hide} onClick={() => setIsPopup(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                <div className={style.myCoin}>
                    <div>my coin qnt</div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={style.myCoin}>
                    <div>my coin qnt</div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={style.myCoin}>
                    <div>my coin qnt</div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioModal;