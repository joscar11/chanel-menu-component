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

    useEffect(() => {
        if (currentItems === items) {
            // reset history properly when we are in the main menu
            setHistory([]);
        }
    }, [currentItems, items]);

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
            <AnimatePresence mode="wait">
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
