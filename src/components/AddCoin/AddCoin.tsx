import React, {FC} from 'react';
import style from "./style.module.scss"

interface AddCoinProps {
    isOpen: boolean,
    setIsOpen: any,
}

const AddCoin: FC <AddCoinProps> = ({isOpen, setIsOpen}) => {
    return (
        <div  className={isOpen ? style.modal : style.modal + " " + style.hide} onClick={() => setIsOpen(false)}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
                <div>
                    <span>Coin: </span>
                    <span>Bitcoin</span>
                </div>

                <div>
                    <span>Price: </span>
                    <span>$ 19012.124564</span>
                </div>

                <div>
                    <span>Quantity: </span>
                    <input step='1' min={0} max={100} type="number"/>
                </div>

                <button>Add</button>
            </div>
        </div>
    );
};

export default AddCoin;