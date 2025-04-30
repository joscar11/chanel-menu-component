//! Imports ------------------------------------------------------------------------------

// React
import { useState, useEffect } from 'react';

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

    // reset history properly when go back to the main menu
    useEffect(() => {
        if (currentItems === items) {
            setHistory([]);
        }
    }, [currentItems, items]);

    //! Handlers --------------------------------------------------------------------------

    /**
     * Handle the click on a menu item.
     * If the item has children, navigates into the submenu.
     *
     * @param item The menu item that was clicked
     */
    const handleItemClick = (item: MenuItemType) => {
        if (item.children && item.children.length > 0) {
            // If item has submenu => we save the history
            setHistory((prev) => [...prev, currentItems]);
            setCurrentItems(item.children);
        }
    };

    /**
     * Handle the click on the back button.
     * Navigates back to the previous menu level.
     */
    const handleBack = () => {
        if (history.length > 0) {
            const previousItems = history[history.length - 1]; // get last menu saved
            setCurrentItems(previousItems); //display previous menu
            setHistory((prev) => prev.slice(0, prev.length - 1)); // clean history
        }
    };

    //! Render ----------------------------------------------------------------------------
    return (
        <nav className={styles.menu}>
            {/* Manage animations when an element enters or leaves the DOM */}
            {/* to animate React component */}
            <ul
                key={currentItems.map((i) => i.id).join('-')} // Unique key for AnimatePresence
                className={styles.menuList}>
                <li className={styles.menuHeader}>
                    {history.length > 0 && (
                        <button className={styles.arrowBackButton} onClick={handleBack}>
                            ←
                        </button>
                    )}
                </li>
                {currentItems.map((item, index) => (
                    <li key={item.id} className={styles.menuItem} onClick={() => handleItemClick(item)}>
                        <MenuItem key={item.id} item={item} onClick={handleItemClick} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

//! Exports -----------------------------------------------------------------------------

export default Menu;
