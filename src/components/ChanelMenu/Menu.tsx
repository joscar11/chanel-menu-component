//! Imports ------------------------------------------------------------------------------

// Types
import { MenuProps } from './menuTypes';

// Styles
import styles from './Menu.module.scss';

// Icons
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

//! Component ---------------------------------------------------------------------------

const Menu = ({ items, onItemClick, onBack, showBack = false, position }: MenuProps) => {
    //! Render ----------------------------------------------------------------------------

    return (
        <div className={`menu-container ${styles.menuContainer} ${styles[position]}`}>
            {showBack && (
                <div className={styles.menuBackItem}>
                    <MdArrowBack className={styles.menuArrow} onClick={onBack} />
                </div>
            )}

            {items.map((item, index) => (
                <div key={index} className={styles.menuItem} onClick={() => onItemClick(item)}>
                    <span>{item.label}</span>
                    {item.children && <MdArrowForward className={styles.menuArrow} />}
                </div>
            ))}
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default Menu;
