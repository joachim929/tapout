export class EventItem {
    private _categoryId?: number;
    private _categoryType: string;
    private _position: number;
    private _itemId?: number;
    private _createdAt?: string;
    private _editedAt?: string;
    private _enId?: number;
    private _enTitle: string;
    private _enDescription: string;
    private _vnId?: number;
    private _vnTitle: string;
    private _vnDescription: string;
    private _disableDescription: boolean;
    private _start: string;
    private _end: string;
    private _startDate: string;
    private _startTime?: string;
    private _endDate?: string;
    private _endTime?: string;
    private _usesStartTime: boolean;
    private _usesEndTime: boolean;
    private _usesEndDate: boolean;
    private _valid: boolean;
    private _active: boolean;
    private _editToggle: boolean;
    private _isCollapsed: boolean;

    constructor() {
        this.usesStartTime = false;
        this.usesEndTime = false;
        this.usesEndDate = false;
        this.editToggle = false;
        this.isCollapsed = true;
    }

    public manualConstructor(item: EventItem) {
        this.categoryId = item.categoryId;
        this.categoryType = item.categoryType;
        this.position = item.position;
        this.itemId = item.itemId;
        this.createdAt = item.createdAt;
        this.editedAt = item.editedAt;
        this.enId = item.enId;
        this.enTitle = item.enTitle;
        this.enDescription = item.enDescription;
        this.vnId = item.vnId;
        this.vnTitle = item.vnTitle;
        this.vnDescription = item.vnDescription;
        this.disableDescription = item.disableDescription;
        this.startDate = item.startDate;
        this.startTime = item.startTime;
        this.endDate = item.endDate;
        this.endTime = item.endTime;
        this.usesStartTime = item.usesStartTime;
        this.usesEndTime = item.usesEndTime;
        this.usesStartTime = item.usesStartTime;
        this.valid = item.valid;
        this.active = item.active;
        this.editToggle = true;
        this.isCollapsed = false;
    }

    get startTimeString(): string {
        if (this.start !== null) {
            const startTime = this.start.split(' ');
            return startTime[1];
        } else {
            return;
        }
    }

    get start(): string {
        return this._start;
    }

    set start(value: string) {
        this._start = value;
    }

    get end(): string {
        return this._end;
    }

    set end(value: string) {
        this._end = value;
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

    get disableDescription(): boolean {
        return this._disableDescription;
    }

    set disableDescription(value: boolean) {
        this._disableDescription = value;
    }

    get startDate(): string {
        return this._startDate;
    }

    set startDate(value: string) {
        this._startDate = value;
    }

    get startTime(): string {
        return this._startTime;
    }

    set startTime(value: string) {
        this._startTime = value;
    }

    get endDate(): string {
        return this._endDate;
    }

    set endDate(value: string) {
        this._endDate = value;
    }

    get endTime(): string {
        return this._endTime;
    }

    set endTime(value: string) {
        this._endTime = value;
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

    set valid(value: boolean) {
        this._valid = value;
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

    // dateTimeValidate() {
    //     if (this.usesEndDate === true && this.startDate !== null && this.endDate !== null) {
    //         let check = this.startDate.before(this.endDate);
    //
    //         if (this.usesEndTime === true && !this.validateEndTimeParams()) {
    //             check = false;
    //         }
    //         if (this.usesStartTime === true && !this.validateStartTimeParams()) {
    //             check = false;
    //         }
    //         this.valid = check;
    //     } else {
    //         if (this.usesStartAndEndTime()) {
    //             if (this.validateEndTimeParams() && this.validateStartTimeParams()) {
    //                 this.timeValidate();
    //             } else {
    //                 this.valid = false;
    //             }
    //         } else if (this.usesStartTime === true) {
    //             this.valid = this.validateStartTimeParams();
    //         } else if (this.usesEndTime === true) {
    //             this.valid = this.validateEndTimeParams();
    //         } else {
    //             this.valid = true;
    //         }
    //     }
    // }
    //
    // private toModel(time: NgbTimeStruct): string {
    //     if (!time) {
    //         return null;
    //     }
    //     return `${this.pad(time.hour)}:${this.pad(time.minute)}`;
    // }
    //
    // private pad(i: number): string {
    //     return i < 10 ? `0${i}` : `${i}`;
    // }
    //
    // private usesStartAndEndTime(): boolean {
    //     return this.usesStartTime && this.usesEndTime;
    // }
    //
    // private validateEndTimeParams(): boolean {
    //     return !(this.endTime === null || typeof this.endTime === 'undefined');
    // }
    //
    // private validateStartTimeParams(): boolean {
    //     return !(this.startTime === null || typeof this.startTime === 'undefined');
    // }
    //
    // private timeValidate() {
    //     if (this.startTime.hour < this.endTime.hour) {
    //         this.valid = true;
    //     } else if (this.startTime.hour === this.endTime.hour) {
    //         this.valid = this.startTime.minute < this.endTime.minute;
    //     } else {
    //         this.valid = false;
    //     }
    // }
}
