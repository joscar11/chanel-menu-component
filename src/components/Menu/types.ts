//! Types ------------------------------------------------------------------------------

export interface MenuItemType {
    id: number;
    label: string;
    children?: MenuItemType[];
}

export interface MenuProps {
    items: MenuItemType[];
}
