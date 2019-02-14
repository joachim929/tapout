/**
 * Created by J on 02/06/2018.
 */
import {DeliveryItem} from '../../shared/food-item';

export const FOODITEMS: DeliveryItem[] = [
    {
        category: [
            {
                foodId: 1,
                foodDescriptor: 'Vietnamese Style Grilled Corn',
                foodPrice: '55K',
                multiPrice: null,
                foodDescription: 'BBQ corn garnished with Shrimp Salts and green onions'
            },
            {
                foodId: 2,
                foodDescriptor: 'Sausage Smoker',
                foodPrice: '120K',
                multiPrice: null,
                foodDescription: '2 types of sausages with house beer mustard and pickles'
            },
            {
                foodId: 3,
                foodDescriptor: 'Tapout Wings',
                foodPrice: '130K',
                multiPrice: null,
                foodDescription: 'Nuoc mam glazed chicken wings with sambal dipping sauce'
            },
            {
                foodId: 4,
                foodDescriptor: 'Fully Loaded Wedges',
                foodPrice: '140K',
                multiPrice: null,
                foodDescription: 'Crispy Da Lat potato wedges topped with cheddar and BBQ trimmings'
            }
        ],
        categoryId: 21,
        categoryName: 'Snacks',
        isCollapsed: false
    },
    {
        category: [
            {
                foodId: 20,
                foodDescriptor: 'Yohoe\'s Wet Ribs',
                foodPrice: null,
                multiPrice: [
                    {
                        description: 'Half rack',
                        price: '380K'
                    },
                    {
                        description: 'Full rack',
                        price: '650K'
                    }
                ],
                foodDescription: 'Six hour Mesquite smoked Spare Ribs covered in our Tap Out BBQ sauce'
            },
            {
                foodId: 21,
                foodDescriptor: 'Mini Vini Style Ribs',
                foodPrice: '165K',
                multiPrice: null,
                foodDescription: 'Smoked and barbecued Vina style short ribs (150g)'
            },
            {
                foodId: 22,
                foodDescriptor: 'Tap Out Pastrami',
                foodPrice: '195K',
                multiPrice: null,
                foodDescription: 'Phu Quoc pepper 18 hour smoked beef brisket (150g)'
            },
            {
                foodId: 23,
                foodDescriptor: 'Smoked Jack Fruit',
                foodPrice: '80K',
                multiPrice: null,
                foodDescription: 'Smoked barbecued Jack Fruit, tastes just like pulled pork (150g)'
            },
            {
                foodId: 23,
                foodDescriptor: 'Pork Belly',
                foodPrice: '160K',
                multiPrice: null,
                foodDescription: 'Hickory smoked pork belly, but going Char Siu style with this one (150g)'
            },
            {
                foodId: 23,
                foodDescriptor: 'Sausage',
                foodPrice: '150K',
                multiPrice: null,
                foodDescription: 'Smoked Sausage (330g)'
            }
        ],
        categoryId: 23,
        categoryName: 'Smoked BBQ Meat',
        isCollapsed: false
    },
    {
        category: [
            {
                foodId: 24,
                foodDescriptor: 'Tap Out Burger',
                foodPrice: '130K',
                multiPrice: null,
                foodDescription: 'Fresh ground beef on a fluffy brioche bun, lettuce, tomato, Alabama BBQ Sauce\n' +
                'Add cheese \t\t\t+30K₫\n' +
                'Add crispy bacon \t+30K₫'
            },
            {
                foodId: 27,
                foodDescriptor: 'The BLT Slab',
                foodPrice: '160K',
                multiPrice: null,
                foodDescription: 'Thick cut, smoked pork belly on grilled sourdough with lettuce, tomato, with Alabama BBQ sauce'
            },
            {
                foodId: 28,
                foodDescriptor: 'Yohoe\'s Rib',
                foodPrice: '180K',
                multiPrice: null,
                foodDescription: 'Boneless ribs on a toasted brioche bun with fresh slaw and pickles, Alabama BBQ Sauce, brioche bun'
            },
            {
                foodId: 26,
                foodDescriptor: 'Tap Out\'s Special Pastrami',
                foodPrice: '200K',
                multiPrice: null,
                foodDescription: 'Smoked beef brisket seasoned with phu quoc pepper duck pate, and pickled mustard on ' +
                'homemade rye bread'
            },
            {
                foodId: 25,
                foodDescriptor: 'Veggie Burger',
                foodPrice: '160K',
                multiPrice: null,
                foodDescription: 'Smoked jackfruit on a toasted brioche bun topped with Vietnamese slaw and pickles'
            }
        ],
        categoryId: 24,
        categoryName: 'Burgers & Sandwiches',
        isCollapsed: false
    },
    {
        category: [
            {
                foodId: 29,
                foodDescriptor: 'Chophouse Salad',
                foodPrice: '100K',
                multiPrice: null,
                foodDescription: 'Chopped lettuce, tomato, onion and grilled corn tossed in chili-ranch dressing\n' +
                'Add chicken \t\t\t+30K₫\n' +
                'Add crispy bacon \t\t\t+30K₫'
            },
            {
                foodId: 30,
                foodDescriptor: 'Arugula Salad',
                foodPrice: '140K',
                multiPrice: null,
                foodDescription: 'Arugula, toasted cashews, grilled tomato, grilled pineapple, ' +
                'pickled vegetables and smoked camembert cheese\n' +
                'Add crispy bacon \t+30K₫\n' +
                'Add chicken \t\t\t+30K₫'
            },
            {
                foodId: 30,
                foodDescriptor: 'Saigon Chicken Salad',
                foodPrice: '130K',
                multiPrice: null,
                foodDescription: 'Chicken tossed on Vietnamese coleslaw'
            }
        ],
        categoryId: 26,
        categoryName: 'Salads',
        isCollapsed: false
    },
    {
        category: [
            {
                foodId: 29,
                foodDescriptor: 'Grilled Corn',
                foodPrice: '30K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Vietnamese Coleslaw',
                foodPrice: '40K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Garlic Rice',
                foodPrice: '40K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Sweet Potato Fries',
                foodPrice: '50K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Dalat Potato Salad',
                foodPrice: '50K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Crispy Potatoes',
                foodPrice: '50K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Grilled Okra',
                foodPrice: '30K',
                multiPrice: null,
                foodDescription: 'false'
            }
        ],
        categoryId: 25,
        categoryName: 'Sides',
        isCollapsed: false
    },
    {
        category: [
            {
                foodId: 29,
                foodDescriptor: 'Soft Drinks',
                foodPrice: '30K',
                multiPrice: null,
                foodDescription: 'Coke\t\t\t\t\t\t\t\tCoke Light\n' +
                'Sprite\t\t\t\t\t\t\t\tGinger Ale\n' +
                'Tonic Water\t\t\t\t\t\t\tSoda Water'
            },
            {
                foodId: 30,
                foodDescriptor: 'East West Independence Stout (500ml)',
                foodPrice: '220K',
                multiPrice: null,
                foodDescription: 'IBU 68 - ABV 12.0% (check for availability)'
            },
            {
                foodId: 30,
                foodDescriptor: 'East West Modern Belgian Dark (500ml)',
                foodPrice: '200K',
                multiPrice: null,
                foodDescription: 'IBU 23 - ABV 8.1% (check for availability)'
            },
            {
                foodId: 30,
                foodDescriptor: 'Corona',
                foodPrice: '65K',
                multiPrice: null,
                foodDescription: 'false'
            },
            {
                foodId: 30,
                foodDescriptor: 'Desperado',
                foodPrice: '60K',
                multiPrice: null,
                foodDescription: 'false'
            }
        ],
        categoryId: 221,
        categoryName: 'Drinks',
        isCollapsed: false
    }
];
