//! Imports ------------------------------------------------------------------------------

// React
import React from 'react';

// Components
import Menu from '@components/Menu/Menu';

//! Data -------------------------------------------------------------------------------

const menuItems = [
    {
        id: 1,
        label: 'artists',
        children: [
            { id: 10, label: 'chris brown' },
            { id: 11, label: 'jessie reyez' }
        ]
    },
    {
        id: 2,
        label: 'album',
        children: [
            { id: 20, label: 'get your wings' },
            { id: 21, label: 'hotel california' },
            { id: 22, label: 'physical graffiti' }
        ]
    },
    {
        id: 3,
        label: 'songs',
        children: [
            { id: 30, label: 'residuals' },
            { id: 31, label: 'goliath' }
        ]
    }
];

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
