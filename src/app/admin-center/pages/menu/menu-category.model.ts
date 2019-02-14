import {MenuItem} from './menu-item.model';

export class MenuCategory {
    id: number;
    type: string;
    enName: string;
    vnName: string;
    createdAt?: string;
    editedAt?: string;
    position: number;
    items: MenuItem[];
    editToggle: boolean;
    isCollapsed: boolean;
}
