//! Imports ------------------------------------------------------------------------------

// React
import { useState } from 'react';

// Styles
import styles from './Menu.module.scss';

// Types
import { MenuItemType, MenuProps } from './types';

// Components
import MenuItem from './MenuItem';
import ArrowButton from './ArrowButton';

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

    const handleBack = () => {
        if (history.length > 0) {
            const previousItems = history[history.length - 1];
            setCurrentItems(previousItems);
            setHistory((prev) => prev.slice(0, prev.length - 1));
        }
    };

    //! Render ----------------------------------------------------------------------------
    return (
        <nav className={styles.menu}>
            {history.length > 0 && <ArrowButton onClick={handleBack} />}{' '}
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
