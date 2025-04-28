//! Imports ------------------------------------------------------------------------------

// React
import { useState, useEffect } from 'react';

// Styles
import styles from './Menu.module.scss';

// Types
import { MenuItemType, MenuProps } from './types';

// Components
import MenuItem from './MenuItem';

// Motion
import { motion, AnimatePresence } from 'framer-motion';

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
            <AnimatePresence mode="wait">
                {/* to animate React component */}
                <motion.ul
                    key={currentItems.map((i) => i.id).join('-')} // Unique key for AnimatePresence
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={styles.menuList}>
                    <li className={styles.menuHeader}>
                        {history.length > 0 ? (
                            <button className={styles.arrowBackButton} onClick={handleBack}>
                                ←
                            </button>
                        ) : (
                            <span className={styles.menuTitle}>menu</span>
                        )}
                    </li>
                    {currentItems.map((item, index) => (
                        <motion.li
                            key={item.id}
                            className={styles.menuItem}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }} // Staggered effect
                            onClick={() => handleItemClick(item)}>
                            <MenuItem key={item.id} item={item} onClick={handleItemClick} />
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </nav>
    );
};

//! Exports -----------------------------------------------------------------------------

export default Menu;
