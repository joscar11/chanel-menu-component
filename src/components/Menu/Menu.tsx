//! Imports ------------------------------------------------------------------------------

// React
import { useState } from 'react';

// Styles
import styles from './Menu.module.scss';

// Types
import { MenuItemType, MenuProps } from './types';

// Components
import MenuItem from './MenuItem';

//! Component ---------------------------------------------------------------------------

const Menu = ({ items }: MenuProps) => {
    //! Hooks -----------------------------------------------------------------------------

    const [currentItems, setCurrentItems] = useState<MenuItemType[]>(items);
    const [history, setHistory] = useState<MenuItemType[][]>([]);

    //! Handlers --------------------------------------------------------------------------

    const handleItemClick = (item: MenuItemType) => {
        // If item has submenu => we save the history
        if (item.children && item.children.length > 0) {
            setHistory((prev) => [...prev, currentItems]);
            setCurrentItems(item.children);
        }
    };

    //! Render ----------------------------------------------------------------------------
    return (
        <nav className={styles.menu}>
            <ul className={styles.menuList}>
                {currentItems.map((item) => (
                    <MenuItem key={item.id} item={item} onClick={handleItemClick} />
                ))}
            </ul>
        </nav>
    );
};

//! Exports -----------------------------------------------------------------------------

export default Menu;
