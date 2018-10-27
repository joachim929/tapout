/**
 * Created by J on 02/06/2018.
 */
import { FoodItem } from './food-item';

export const FOODITEMS: FoodItem[] = [
    { foodCategory: [
        {
            foodID: 1,
            foodDescriptor: 'Grilled Prawn Salad',
            foodPrice: '150K',
            foodDescription: 'Grilled prawns, roasted peppers & zucchini, cherry tomatoes, goats cheese, and a rosemary vinaigrette'
        },
        {
            foodID: 2,
            foodDescriptor: 'Onion Blossom',
            foodPrice: '75K',
            foodDescription: 'Full white onion carved into a blossom shape then battered & fried, served with a spicy cocktail sauce'
        },
        {
            foodID: 3,
            foodDescriptor: 'Chili Con Carne Small / Large',
            foodPrice: '75K / 125K',
            foodDescription: 'A bowl of homemade chili topped with cheddar cheese, fried tortillas, sour cream & green onions'
        },
        {
            foodID: 4,
            foodDescriptor: 'Fried Oysters',
            foodPrice: '85K',
            foodDescription: 'Topped with pomegranate molasses, cool ranch dressing and diced jalapeno'
        },

        {
            foodID: 5,
            foodDescriptor: 'Fully Loaded Baked Potato',
            foodPrice: '70K',
            foodDescription: 'Stuffed with sour cream, butter, bacon, cheddar cheese and green onion'
        },
        {
            foodID: 6,
            foodDescriptor: 'Fried Chicken Wings 6pcs / 12pcs',
            foodPrice: '90K / 170K',
            foodDescription: 'Choice of sweet & sticky bourbon or Siracha Buffalo sauce'
        },
        {
            foodID: 7,
            foodDescriptor: 'Mac ‘N Cheese Balls',
            foodPrice: '75K',
            foodDescription: 'Cheddar & bacon macaroni rolled into balls and fried. Topped with cool ranch dressing, ' +
            'bacon, cheddar cheese and green onions.'
        },
        {
            foodID: 8,
            foodDescriptor: 'Spinach & Artichoke Dip',
            foodPrice: '85K',
            foodDescription: 'Cold dip served with homemade chips, and assorted fresh vegetables'
        },
        {
            foodID: 9,
            foodDescriptor: 'Loaded Fries',
            foodPrice: '140K',
            foodDescription: 'Hand cut fries topped with pulled pork, bacon, cheddar cheese and Cool Ranch dressing'
        }
    ], foodCategoryID: 21, foodCategoryName: 'Starters'},
    { foodCategory: [
        {
            foodID: 10,
            foodDescriptor: '',
            foodPrice: 'false',
            foodDescription: 'Served with a side of your choice'
        },
        {
            foodID: 11,
            foodDescriptor: 'Classic Burger',
            foodPrice: '125K',
            foodDescription: '150gr beef patty, lettuce, tomato, onion, pickle, ketchup & mustard'
        },
        {
            foodID: 12,
            foodDescriptor: 'Bacon & Cheese Burger',
            foodPrice: '150K',
            foodDescription: '150gr beef patty, lettuce, tomato, smoked bacon, cheddar cheese, dill pickle, ketchup & mustard'
        },
        {
            foodID: 13,
            foodDescriptor: 'Bacon, Cranberry and Brie Burger',
            foodPrice: '185K',
            foodDescription: '150gr beef patty, smoke bacon, brie cheese, homemade cranberry sauce and lettuce'
        },
        {
            foodID: 14,
            foodDescriptor: 'The TAP OUT BOMB',
            foodPrice: '250K',
            foodDescription: '125gr wheel of Camembert breaded and fried, 150gr beef patty, lettuce, tomato, homemade mustard sauce'
        },
        {
            foodID: 15,
            foodDescriptor: 'Chili Cheese Dogs Single / Double',
            foodPrice: '110K / 185K',
            foodDescription: 'Frankfurters in a grilled bun topped with chili con carne, cheddar cheese & diced Jalepenos'
        },
        {
            foodID: 16,
            foodDescriptor: 'Cubano Sandwich',
            foodPrice: '160K',
            foodDescription: 'Smoked pork shoulder, ham, Swiss cheese, dill pickles, yellow mustard. Pressed in a Cuban style bread'
        },
        {
            foodID: 17,
            foodDescriptor: 'Pulled Pork Sandwich',
            foodPrice: '150K',
            foodDescription: 'Smoked & pulled pork shoulder topped with green apple coleslaw, served with a side of your choice'
        },
        {
            foodID: 18,
            foodDescriptor: 'Steak Sandwich',
            foodPrice: '200K',
            foodDescription: '125g grilled Australian rib eye, marinated red peppers & zucchini, coriander &' +
            ' lime chimichurri and cheddar cheese. Served on a homemade grilled light rye bread.'
        },
        {
            foodID: 19,
            foodDescriptor: 'Montreal Smoked Meat Sandwich',
            foodPrice: '180K',
            foodDescription: 'Wood smoked cured brisket in our homemade rye bread, ' +
            'smothered in yellow mustard, served with hand cut fries, coleslaw and kosher dill'
        }
    ], foodCategoryID: 22, foodCategoryName: 'Burgers & Sandwiches'},
    { foodCategory: [
        {
            foodID: 20,
            foodDescriptor: 'Wood Smoked Ribs Half / Full Rack',
            foodPrice: '300K / 550K',
            foodDescription: 'Served with Two Choice of Sides'
        },
        {
            foodID: 21,
            foodDescriptor: '250g Australian Grain fed Rib Eye Steak',
            foodPrice: '250K',
            foodDescription: 'Flame grilled and pan finished with butter, garlic and rosemary'
        },
        {
            foodID: 22,
            foodDescriptor: 'Fish & Chips',
            foodPrice: '170K',
            foodDescription: 'Beer battered fish and fries, served with a homemade tartar sauce'
        },
        {
            foodID: 23,
            foodDescriptor: 'Bourbon Chicken',
            foodPrice: '160K',
            foodDescription: 'Grilled chicken breast coated in a sweet & sticky bourbon sauce, topped with goats' +
            ' cheese and avocado, served with a side of your choice'
        }
    ], foodCategoryID: 23, foodCategoryName: 'Mains'},
    { foodCategory: [
        {
            foodID: 24,
            foodDescriptor: 'Hand Cut Fries',
            foodPrice: '50K',
            foodDescription: 'false'
        },
        {
            foodID: 25,
            foodDescriptor: 'Sweet Potato Fries',
            foodPrice: '50K',
            foodDescription: 'false'
        },
        {
            foodID: 26,
            foodDescriptor: 'Salad',
            foodPrice: '45K',
            foodDescription: 'Lettuce, cherry tomato, marinated zucchini & peppers, rosemary vinaigrette'
        },
        {
            foodID: 27,
            foodDescriptor: 'Green Beans',
            foodPrice: '40K',
            foodDescription: 'Steamed and tossed with butter, garlic and cherry tomatoes'
        },
        {
            foodID: 28,
            foodDescriptor: 'Coleslaw',
            foodPrice: '35K',
            foodDescription: 'false'
        }
    ], foodCategoryID: 24, foodCategoryName: 'Sides'},
    { foodCategory: [
        {
            foodID: 29,
            foodDescriptor: 'Ice cream tacos',
            foodPrice: '90K',
            foodDescription: 'Homemade cheesecake & fudge, peanut butter, vanilla ice cream stuffed into a home made waffle “taco” cone'
        },
        {
            foodID: 30,
            foodDescriptor: 'Group Ice Cream Tacos deal:',
            foodPrice: '230K',
            foodDescription: '3 Tacos'
        },
        {
            foodID: 31,
            foodDescriptor: 'Baked Pineapple & Camembert',
            foodPrice: '190K',
            foodDescription: '125g Camembert wheel oven baked topped with a sweet pineapple reduction. Served with toasted bread.'
        },
        {
            foodID: 32,
            foodDescriptor: 'Banana Foster',
            foodPrice: '90K',
            foodDescription: 'Bananas flambéed with dark rum & banana liqueur, brown sugar and cinnamon, served with coconut ice cream'
        }
    ], foodCategoryID: 25, foodCategoryName: 'Desserts'}
];


