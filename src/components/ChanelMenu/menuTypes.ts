//! Types ------------------------------------------------------------------------------

export interface MenuItemType {
    id: number;
    label: string;
    children?: MenuItemType[];
}

export interface ChanelMenuProps {
    items: MenuItemType[];
}

export interface MenuProps {
    items: MenuItemType[];
    onItemClick: (item: MenuItemType) => void;
    onBack?: () => void;
    showBack?: boolean;
    position: 'left' | 'active' | 'right';
}
