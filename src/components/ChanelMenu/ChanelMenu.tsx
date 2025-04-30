//! Imports ------------------------------------------------------------------------------

// React
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Components
import Menu from './Menu';

// Types
import { MenuItemType } from './menuTypes';

// Styles
import styles from './ChanelMenu.module.scss';

//! Component ---------------------------------------------------------------------------

interface ChanelMenuProps {
    items: MenuItemType[];
}

const ChanelMenu = ({ items }: ChanelMenuProps) => {
    //! Hooks ------------------------------------------------------------------------------

    const [menuHistory, setMenuHistory] = useState<MenuItemType[][]>([items]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [containerHeight, setContainerHeight] = useState<number>(408);

    // To adjust the height with each menu change
    useEffect(() => {
        const menuContainers = document.querySelectorAll(`.${styles.menuContainer}`);
        const activeMenu = menuContainers[activeIndex] as HTMLElement | null;

        if (activeMenu) {
            setContainerHeight(activeMenu.scrollHeight);
        }
    }, [activeIndex, menuHistory]);

    //! Handlers ------------------------------------------------------------------------------

    /**
     * Handle the click on a menu item.
     * If the item has children, navigate forward.
     *
     * @param item The menu item that was clicked
     */
    const handleItemClick = useCallback(
        (item: MenuItemType) => {
            if (item.children && !isAnimating) {
                setIsAnimating(true);
                setMenuHistory((prev) => [...prev, item.children!]); // "!" tells TypeScript : "I know children is defined here"

                //setTimemout to desynchronize the two setState (menuHistory and activeIndex) to allow React to place
                // the new menu in the DOM before triggering the transition
                animationTimeoutRef.current = setTimeout(() => {
                    setActiveIndex((prev) => prev + 1);
                    setIsAnimating(false);
                }, 0);
            }
        },
        [isAnimating]
    );

    /**
     * Handle the back navigation.
     * Move one level up in the history.
     */
    const handleBack = useCallback(() => {
        if (menuHistory.length > 1 && !isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prev) => prev - 1);

            animationTimeoutRef.current = setTimeout(() => {
                setMenuHistory((prev) => prev.slice(0, -1));
                setIsAnimating(false);
            }, 300); // Match animation duration
        }
    }, [isAnimating, menuHistory]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, []);

    //! Render ----------------------------------------------------------------------------

    // To avoid re-rendering all menus on every tick
    const renderedMenus = useMemo(() => {
        return menuHistory.map((menu, index) => (
            <Menu
                key={index}
                items={menu}
                onItemClick={handleItemClick}
                onBack={handleBack}
                showBack={index > 0}
                position={index < activeIndex ? 'left' : index > activeIndex ? 'right' : 'active'}
            />
        ));
    }, [menuHistory, activeIndex, handleItemClick, handleBack]);

    return (
        <div className={styles.menuWrapper} style={{ height: `${containerHeight}px` }}>
            {renderedMenus}
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default ChanelMenu;
