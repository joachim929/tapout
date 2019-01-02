import {MenuItem} from './menu-item.model';

export class MenuCategory {
    id: number;
    type: string;
    name: string;
    position: number;
    items: Array<MenuItem>;
}
