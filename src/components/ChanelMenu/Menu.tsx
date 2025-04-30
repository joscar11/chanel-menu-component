//! Imports ------------------------------------------------------------------------------

// React
import React from 'react';

// Types
import { MenuItemType } from './types';

// Styles
import styles from './Menu.module.scss';

// Icons
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

//! Component ---------------------------------------------------------------------------

interface MenuProps {
    items: MenuItemType[];
    onItemClick: (item: MenuItemType) => void;
    onBack?: () => void;
    showBack?: boolean;
    position: 'left' | 'active' | 'right';
}

const Menu = ({ items, onItemClick, onBack, showBack = false, position }: MenuProps) => {
    //! Render ----------------------------------------------------------------------------

    return (
        <div className={`${styles.menuContainer} ${styles[position]}`}>
            {showBack && (
                <div className={styles.menuBackItem} onClick={onBack}>
                    <MdArrowBack className={styles.menuArrow} />
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
