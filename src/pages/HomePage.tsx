//! Imports ------------------------------------------------------------------------------

// React
import React from 'react';

// Components
import Menu from '@components/Menu/Menu';

// Data
import { menuItems } from '@data/menuData';

//! Component ---------------------------------------------------------------------------

const HomePage = () => {
    //! Render ----------------------------------------------------------------------------

    return (
        <div>
            <Menu items={menuItems} />
        </div>
    );
};

//! Exports -----------------------------------------------------------------------------

export default HomePage;
