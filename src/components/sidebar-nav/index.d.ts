declare class SidebarNavListItem {
    name: string;
    route: string;
    children?: SidebarNavListItem[];
}

declare class SidebarNavListGroup {
    title: string;
    children: SidebarNavListItem[];
}

