/**
 * Created by J on 20/06/2018.
 * Object for drink item
 */
export class DrinkItem {
    drinkCategory:
        {
            drinkID: number;
            descriptor: string;
            price: string;
            description: string;
        }[];
    drinkCategoryID: number;
    drinkCategoryName: string;
    isCollapsed: boolean;
}
