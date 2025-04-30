//! Imports ------------------------------------------------------------------------------

// React
import React from 'react';

// Components
import Menu from '@components/Menu/Menu';

// Data
import { menuItems } from '@data/menuData';

// Style
import styles from './HomePage.module.scss';

//! Component ---------------------------------------------------------------------------

const HomePage = () => {
    //! Render ----------------------------------------------------------------------------

    return (
        <div className={styles.page}>
            <div className={styles.menuWrapper}>
                <Menu items={menuItems} />
            </div>
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default HomePage;
