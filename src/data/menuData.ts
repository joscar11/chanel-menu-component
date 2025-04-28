//! Data ------------------------------------------------------------------------------

export const menuItems = [
    {
        id: 1,
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
                    { id: 10, label: 'yessie' },
                    { id: 11, label: 'paid in memories' }
                ]
            }
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
