export class NewMenuItem {
    caption: string;
    categoryId: number;
    category: string;
    price: string;
    categoryPosition: number;
    pagePosition: number;
    enTitle: string;
    enDescription?: string;
    vnTitle: string;
    vnDescription?: string;
    disableDescription: boolean;
}

export class Category {
    id: number;
    enName: string;
    vnName: string;
    type: string;
    position?: number;
}
