/**
 * Created by J on 02/06/2018.
 * Object for food item
 */
export class FoodItem {
    foodCategory: {
        foodID: number;
        foodDescriptor: string;
        foodPrice: string | null;
        foodDescription: string;
    }[];
    foodCategoryID: number;
    foodCategoryName: string;
}

export class DeliveryItem {
    category: {
        foodId: number;
        foodDescriptor: string | null;
        foodPrice: string | null;
        multiPrice: MultiPrice[] | null;
        foodDescription: string | null;
    }[];
    categoryId: number;
    categoryName: string;
}

export class MultiPrice {
    description: string | null;
    price: string | null;
}
