import {NgbDate, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export class EventItem {
    private _categoryId?: number;
    private _categoryType: string;
    private _position: number;
    private _itemId?: number;
    public _createdAt?: Date;
    private _editedAt?: Date;
    private _enId?: number;
    private _enTitle: string;
    private _enDescription: string;
    private _vnId?: number;
    private _vnTitle: string;
    private _vnDescription: string;
    private _startDate: NgbDate;
    private _startTime?: NgbTimeStruct;
    private _endDate?: NgbDate;
    private _endTime?: NgbTimeStruct;
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
        this.startTime = {hour: 0, minute: 0, second: 0};
        this.endTime = {hour: 0, minute: 0, second: 0};
    }

    get startTimeString(): string {
        if (this.startTime !== null) {
            return this.toModel(this.startTime);
        }
    }

    get endTimeString(): string {
        if (this.endTime !== null) {
            return this.toModel(this.endTime);
        }
    }

    get startTime(): NgbTimeStruct {
        return this._startTime;
    }

    set startTime(value: NgbTimeStruct) {
        this._startTime = value;
    }

    get endTime(): NgbTimeStruct {
        return this._endTime;
    }

    set endTime(value: NgbTimeStruct) {
        this._endTime = value;
    }

    get startDate(): NgbDate {
        return this._startDate;
    }

    set startDate(value: NgbDate) {
        this._startDate = value;
    }

    get endDate(): NgbDate {
        return this._endDate;
    }

    set endDate(value: NgbDate) {
        this._endDate = value;
    }

    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    set isCollapsed(value: boolean) {
        this._isCollapsed = value;
    }

    get categoryId(): number {
        return this._categoryId;
    }

    set categoryId(value: number) {
        this._categoryId = Number(value);
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
        if (value < 1) {
            value = 1;
        }
        this._position = value;
    }

    get itemId(): number {
        return this._itemId;
    }

    set itemId(value: number) {
        this._itemId = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
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

    get usesStartTime(): boolean {
        return this._usesStartTime;
    }

    set usesStartTime(value: boolean) {
        if (value === false) {
            this.startTime = {hour: 0, minute: 0, second: 0};
        }
        this._usesStartTime = value;
    }

    get usesEndTime(): boolean {
        return this._usesEndTime;
    }

    set usesEndTime(value: boolean) {
        if (value === false) {
            this.endTime = {hour: 0, minute: 0, second: 0};
        }
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

    dateTimeValidate() {
        if (this.usesEndDate === true && this.startDate !== null && this.endDate !== null) {
            let check  = this.startDate.before(this.endDate);

            if (this.usesEndTime === true && !this.validateEndTimeParams()) {
                check = false;
            }
            if (this.usesStartTime === true && !this.validateStartTimeParams()) {
                check = false;
            }
            this.valid = check;
        } else {
            if (this.usesStartAndEndTime()) {
                if (this.validateEndTimeParams() && this.validateStartTimeParams()) {
                    this.timeValidate();
                } else {
                    this.valid = false;
                }
            } else if (this.usesStartTime === true) {
                this.valid = this.validateStartTimeParams();
            } else if (this.usesEndTime === true) {
                this.valid = this.validateEndTimeParams();
            } else {
                this.valid = true;
            }
        }
    }

    private toModel(time: NgbTimeStruct): string {
        if (!time) {
            return null;
        }
        return `${this.pad(time.hour)}:${this.pad(time.minute)}`;
    }

    private pad(i: number): string {
        return i < 10 ? `0${i}` : `${i}`;
    }

    private usesStartAndEndTime(): boolean {
        return this.usesStartTime && this.usesEndTime;
    }

    private validateEndTimeParams(): boolean {
        return !(this.endTime === null || typeof this.endTime === 'undefined');
    }

    private validateStartTimeParams(): boolean {
        return !(this.startTime === null || typeof this.startTime === 'undefined');
    }

    private timeValidate() {
        if (this.startTime.hour < this.endTime.hour) {
            this.valid = true;
        } else if (this.startTime.hour === this.endTime.hour) {
            this.valid = this.startTime.minute < this.endTime.minute;
        } else {
            this.valid = false;
        }
    }
}
