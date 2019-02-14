import {EventItem} from './event-item.model';

export class EventCategory {
    id: number;
    enName: string;
    vnName: string;
    type: string;
    position: number;
    items: EventItem[];
    createdAt: string;
    editedAt: string;
    active: boolean;
    editToggle: boolean;
    isCollapsed: boolean;
}
