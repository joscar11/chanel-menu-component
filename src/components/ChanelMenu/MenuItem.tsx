//! Imports ------------------------------------------------------------------------------

// Styles
import styles from './Menu.module.scss';

// Types
import { MenuItemType } from './types';

//! Component ---------------------------------------------------------------------------

interface MenuItemProps {
    item: MenuItemType;
    onClick: (item: MenuItemType) => void;
}

const MenuItem = ({ item, onClick }: MenuItemProps) => {
    //! Render ----------------------------------------------------------------------------
    return (
        <div className={styles.menuItemContent} onClick={() => onClick(item)}>
            <span className={styles.menuItemLabel}>{item.label}</span>
            {item.children && <span className={styles.menuItemArrow}>➔</span>}
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default MenuItem;
