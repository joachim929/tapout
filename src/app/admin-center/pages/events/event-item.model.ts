export class EventItem {
    private _categoryId?: number = null;
    private _categoryType?: string = null;
    private _position?: number = null;
    private _itemId?: number = null;
    private _createAt?: Date = null;
    private _editedAt?: Date = null;
    private _enId?: number = null;
    private _enTitle: string;
    private _enDescription?: string = null;
    private _vnId?: number = null;
    private _vnTitle: string;
    private _vnDescription?: string = null;
    private _start?: Date = null;
    private _end?: Date = null;
    private _usesStartTime: boolean;
    private _usesEndTime: boolean;
    private _usesEndDate: boolean;
    private _valid: boolean;
    private _active: boolean;
    private _editToggle: boolean;

    constructor() {
        this.usesStartTime = false;
        this.usesEndTime = false;
        this.usesEndDate = false;
        this.editToggle = false;
        this.validate();
    }

    get categoryId(): number {
        return this._categoryId;
    }

    set categoryId(value: number) {
        this._categoryId = value;
    }

    get categoryType(): string {
        return this._categoryType;
    }

    set categoryType(value: string) {
        this._categoryType = value;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }

    get itemId(): number {
        return this._itemId;
    }

    set itemId(value: number) {
        this._itemId = value;
    }

    get createAt(): Date {
        return this._createAt;
    }

    set createAt(value: Date) {
        this._createAt = value;
    }

    get editedAt(): Date {
        return this._editedAt;
    }

    set editedAt(value: Date) {
        this._editedAt = value;
    }

    get enId(): number {
        return this._enId;
    }

    set enId(value: number) {
        this._enId = value;
    }

    get enTitle(): string {
        return this._enTitle;
    }

    set enTitle(value: string) {
        this._enTitle = value;
    }

    get enDescription(): string {
        return this._enDescription;
    }

    set enDescription(value: string) {
        this._enDescription = value;
    }

    get vnId(): number {
        return this._vnId;
    }

    set vnId(value: number) {
        this._vnId = value;
    }

    get vnTitle(): string {
        return this._vnTitle;
    }

    set vnTitle(value: string) {
        this._vnTitle = value;
    }

    get vnDescription(): string {
        return this._vnDescription;
    }

    set vnDescription(value: string) {
        this._vnDescription = value;
    }

    get start(): Date {
        return this._start;
    }

    set start(value: Date) {
        this._start = value;
    }

    get end(): Date {
        return this._end;
    }

    set end(value: Date) {
        this._end = value;
    }

    get usesStartTime(): boolean {
        return this._usesStartTime;
    }

    set usesStartTime(value: boolean) {
        this._usesStartTime = value;
    }

    get usesEndTime(): boolean {
        return this._usesEndTime;
    }

    set usesEndTime(value: boolean) {
        this._usesEndTime = value;
    }

    get usesEndDate(): boolean {
        return this._usesEndDate;
    }

    set usesEndDate(value: boolean) {
        this._usesEndDate = value;
    }

    get valid(): boolean {
        return this._valid;
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

    private validate() {
        if (this.start === null || this.end === null) {
            this._valid = false;
        } else if (this.usesStartTime === true) {
            if (this.usesEndDate === true) {
                if (this.usesEndTime === true) {
                    this._valid = this.start.getTime() < this.end.getTime();
                } else {
                    this.compareStartAndEndDate();
                }
            } else {
                if (this.usesEndTime === true) {
                    this.compareStartAndEndTime();
                } else {
                    this._valid = true;
                }
            }
        } else {
            if (this.usesEndDate === true) {
                this._valid = this.start.getTime() < this.end.getTime();
            } else {
                this.usesEndTime = false;
                this._valid = true;
            }
        }
    }

    private compareStartAndEndTime() {
        const startHour = this.start.getUTCHours();
        const startMinutes = this.start.getUTCMinutes();
        const endHour = this.end.getUTCHours();
        const endMinutes = this.end.getUTCMinutes();
        if (startHour > endHour) {
            this._valid = false;
        } else {
            this._valid = startMinutes > endMinutes;
        }
    }

    private compareStartAndEndDate() {
        const startYear = this.start.getUTCFullYear();
        const startMonth = this.start.getUTCMonth();
        const startDay = this.start.getUTCDay();
        const endYear = this.end.getUTCFullYear();
        const endMonth = this.end.getUTCMonth();
        const endDay = this.end.getUTCDay();
        if (startYear > endYear) {
            this._valid = false;
        } else {
            if (startMonth > endMonth) {
                this._valid = false;
            } else {
                this._valid = startDay > endDay;
            }
        }

    }
}
