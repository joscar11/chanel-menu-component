//! Data ------------------------------------------------------------------------------

export const menuItems = [
    {
        id: 1,
        label: 'designplox'
    },
    {
        id: 2,
        label: 'artists',
        children: [
            {
                id: 10,
                label: 'chris brown',
                children: [
                    { id: 40, label: 'fame' },
                    { id: 41, label: 'fortune' }
                ]
            },
            {
                id: 11,
                label: 'jessie reyez',
                children: [
                    { id: 42, label: 'yessie' },
                    { id: 43, label: 'paid in memories' }
                ]
            }
        ]
    },
    {
        id: 3,
        label: 'album',
        children: [
            { id: 20, label: 'get your wings' },
            { id: 21, label: 'hotel california' },
            { id: 22, label: 'physical graffiti' }
        ]
    },
    {
        id: 4,
        label: 'songs',
        children: [
            { id: 30, label: 'residuals' },
            { id: 31, label: 'goliath' }
        ]
    },
    {
        id: 5,
        label: 'genre',
        children: [
            { id: 50, label: 'r&b' },
            { id: 51, label: 'pop' }
        ]
    },
    {
        id: 6,
        label: 'settings',
        children: [
            { id: 60, label: 'volume' },
            { id: 61, label: 'bass' }
        ]
    }
];
