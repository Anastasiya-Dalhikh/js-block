import * as classes from './MenuButton.module.css';

type MenuButtonProps = {
    isOpen: boolean;
    onClick: () => void;
}

export const MenuButton = ({isOpen, onClick}: MenuButtonProps) =>{
    return(
        <button className={`${classes.burger} ${isOpen ? classes.open : ''}`} onClick={onClick}>
                <span className={classes.closeIcon}>✕</span>
                <div className={classes.burgerIcon}>
                    <span className={classes.burgerLine}></span>
                    <span className={classes.burgerLine}></span>
                    <span className={classes.burgerLine}></span>
                </div>
        </button>
    )
}