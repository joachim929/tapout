import {EventItem} from './event-item.model';

export class EventCategory {
    private _id?: number;
    private _enName?: string;
    private _vnName?: string;
    private _type?: string;
    private _position?: number;
    private _items?: EventItem[];
    private _createdAt?: string;
    private _editedAt?: string;
    private _active?: boolean;
    private _editToggle?: boolean;
    private _isCollapsed?: boolean;

    public setFromExisting(eventCat: EventCategory) {
        this.id = eventCat.id;
        this.enName = eventCat.enName;
        this.vnName = eventCat.vnName;
        this.type = eventCat.type;
        this.position = eventCat.position;
        this.items = eventCat.items;
        this.createdAt = eventCat.createdAt;
        this.editedAt = eventCat.editedAt;
        this.active = eventCat.active;
        this.editToggle = eventCat.editToggle;
        this.isCollapsed = eventCat.isCollapsed;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get enName(): string {
        return this._enName;
    }

    set enName(value: string) {
        this._enName = value;
    }

    get vnName(): string {
        return this._vnName;
    }

    set vnName(value: string) {
        this._vnName = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }

    get items(): EventItem[] {
        return this._items;
    }

    set items(value: EventItem[]) {
        this._items = value;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(value: string) {
        this._createdAt = value;
    }

    get editedAt(): string {
        return this._editedAt;
    }

    set editedAt(value: string) {
        this._editedAt = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get editToggle(): boolean {
        return this._editToggle;
    }

    set editToggle(value: boolean) {
        this._editToggle = value;
    }

    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    set isCollapsed(value: boolean) {
        this._isCollapsed = value;
    }

    get itemsLength(): number {
        if (typeof this.items !== 'undefined') {
            return this.items.length;
        } else {
            return 0;
        }
    }
}
