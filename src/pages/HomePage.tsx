//! Imports ------------------------------------------------------------------------------

// React
import React from 'react';

// Components
import ChanelMenu from '@components/ChanelMenu/ChanelMenu';

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
                <ChanelMenu items={menuItems} />
            </div>
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default HomePage;
