export class EventItem {
    categoryId: number;
    position: number;
    itemId: number;
    createAt?: Date;
    editedAt?: Date;
    enId?: number;
    enTitle: string;
    enDescription?: string;
    vnId?: number;
    vnTitle: string;
    vnDescription?: string;
    start: Date;
    end: Date;
    usesStartTime: boolean;
    usesEndTime: boolean;
    usesEndDate: boolean;
    valid: boolean;
    active: boolean;
    editToggle: boolean;
}
