/**
 * Created by J on 20/06/2018.
 */
import {DrinkItem} from './drink-item';

export const DRINKITEMS: DrinkItem[] = [
    {
        drinkCategory: [
            {
                drinkID: 1,
                descriptor: 'East West Far East IPA',
                price: '95K',
                description: 'IBU 54 - ABV 6.7%'
            },
            {
                drinkID: 2,
                descriptor: 'East West Pale Ale',
                price: '95K',
                description: 'IBU 32 - ABV 6.0%'
            },
            {
                drinkID: 3,
                descriptor: 'Pasteur Street Jasmin IPA',
                price: '95K',
                description: 'IBU 50 - ABV 6.5%'
            },
            {
                drinkID: 4,
                descriptor: 'Pasteur Street Passion Fruit Wheat Ale',
                price: '95K',
                description: 'IBU 15 - ABV 4.0%'
            },
            {
                drinkID: 5,
                descriptor: 'Heart of Darkness Loose Rivet New England IPA',
                price: '100K',
                description: 'IBU 59 - ABV 7.5%'
            },
            {
                drinkID: 6,
                descriptor: 'Heart of Darkness Mexican Pilsner',
                price: '95K',
                description: 'IBU 24 - ABV 4.2%'
            },
            {
                drinkID: 7,
                descriptor: 'Te Te White Ale',
                price: '90K',
                description: 'IBU 19 - ABV 5.5%'
            },
            {
                drinkID: 8,
                descriptor: 'Hanoi Cider',
                price: '105K',
                description: 'ABV 6.0%'
            },
            {
                drinkID: 9,
                descriptor: 'Tiger Draft Small',
                price: '40K',
                description: 'ABV 5.0%'
            },
            {
                drinkID: 10,
                descriptor: 'Tiger Draft Big',
                price: '60K',
                description: ' ABV 5.0%'
            }
        ], drinkCategoryID: 1, drinkCategoryName: 'On-tap'
    },
    {
        drinkCategory: [
            {
                drinkID: 11,
                descriptor: 'Gauden Schwarzbier',
                price: '70K',
                description: 'ABV 5.2%'
            },
            {
                drinkID: 12,
                descriptor: 'Tiger Bottle',
                price: '50K',
                description: 'ABV 5.0%'
            },
            {
                drinkID: 13,
                descriptor: 'Desperado Bottle',
                price: '60K',
                description: 'ABV 5.9%'
            },
            {
                drinkID: 14,
                descriptor: 'Heineken Bottle',
                price: '60K',
                description: 'ABV 5.0%'
            },
            {
                drinkID: 13,
                descriptor: 'Amstel Bottle',
                price: '60K',
                description: 'ABV 4.6%'
            }
        ], drinkCategoryID: 2, drinkCategoryName: 'Bottles'
    },
    {
        drinkCategory: [
            {
                drinkID: 14,
                descriptor: 'East West Modern Belgian Dark',
                price: '200K',
                description: '500ml - IBU 23 - ABV 8.1%'
            },
            {
                drinkID: 15,
                descriptor: 'East West Independence Stout',
                price: '220K',
                description: '500ml - IBU 68 - ABV 12%'
            }
        ], drinkCategoryID: 3, drinkCategoryName: 'Special-Beers'
    },
    {
        drinkCategory: [
            {
                drinkID: 16,
                descriptor: 'House Pours',
                price: '80K',
                description: 'false'
            },
            {
                drinkID: 17,
                descriptor: 'Premium Pours',
                price: '90K - 175K',
                description: 'false'
            }
        ], drinkCategoryID: 4, drinkCategoryName: 'Mixers'
    },
    {
        drinkCategory: [
            {
                drinkID: 18,
                descriptor: 'Celery Sour',
                price: '130K',
                description: 'Gin, celery & lime juice, sugar syrup, egg whites, bitters.'
            },
            {
                drinkID: 19,
                descriptor: 'Espresso Martini',
                price: '130K',
                description: 'Vodka, Kahlua, Baileys, Vietnamese café, vanilla.'
            },
            {
                drinkID: 20,
                descriptor: 'Deep South Peach Tea',
                price: '140K',
                description: 'Vodka, peach liqueur, peach puree,lime juice, bitters, earl grey honey tea.'
            },
            {
                drinkID: 21,
                descriptor: 'The Sour Honi',
                price: '140K',
                description: 'Smoked pineapple & char grilled banana infused rum, banana liqueur, lime & pineapple' +
                ' reduction, egg white.'
            },
            {
                drinkID: 22,
                descriptor: 'Long Island',
                price: '140K',
                description: 'Vodka, rum, gin, tequila, triple sec, sugar syrup, lime juice, coke.'
            },
            {
                drinkID: 23,
                descriptor: 'Tap Out Blues',
                price: '140K',
                description: 'Rum, Blue Curacao, lime, sugar syrup.'
            },
            {
                drinkID: 19,
                descriptor: 'Linh\'s Bourban',
                price: '140K',
                description: 'Bourbon Whiskey, Crème de Cassis, lime, sugar syrup, bitters.'
            },
            {
                drinkID: 20,
                descriptor: 'Perfect Lady',
                price: '150K',
                description: 'Bombay gin, Peach Liquor, lime juice, egg whites.'
            },
            {
                drinkID: 21,
                descriptor: 'Cherry Blossom',
                price: '150K',
                description: 'Gin, Cherry Liquor, Dom Benedictine, lime juice, 5 spice and egg whites.'
            },
            {
                drinkID: 22,
                descriptor: 'Pisco & Pineapple Meringee',
                price: '150K',
                description: 'Pisco, Pineapple juice, Pineapple reduction, lime juice, egg whites, sugar.'
            },
            {
                drinkID: 23,
                descriptor: 'The Forgotten Lady',
                price: '160K',
                description: 'Rum, Apricot brandy, Mango sorbet, lime juice, bitters.'
            },
            {
                drinkID: 21,
                descriptor: 'Tropical Climax',
                price: '160K',
                description: 'Light rum, dark rum, apricot brandy, triple sec, pineapple, lime & fresh passion fruit juice.'
            },
            {
                drinkID: 22,
                descriptor: 'Corontina',
                price: '180K',
                description: 'Double shot tequila, triple sec, lime & passion fruit juice blended with ice,' +
                ' served in a large cocktail glass with a mini corona.'
            },
            {
                drinkID: 23,
                descriptor: 'Tito\s Bloody Mary',
                price: '185K',
                description: 'Tito’s Vodka, Horseradish, lime juice, Tabasco, Worcestershire sauce, kosher salt, ground ' +
                'pepper in Tomato juice and a slice of bacon.'
            }
        ], drinkCategoryID: 5, drinkCategoryName: 'Cocktails'
    },
    {
        drinkCategory: [
            {
                drinkID: 16,
                descriptor: '4x Beer Flight - Choice of 4 Craft Beers',
                price: '250K',
                description: 'false'
            },
            {
                drinkID: 17,
                descriptor: '8x Beer Flight - Choice of 8 Craft Beers',
                price: '490K',
                description: 'false'
            }
        ], drinkCategoryID: 9, drinkCategoryName: 'Flights'
    },
    {
        drinkCategory: [
            {
                drinkID: 24,
                descriptor: 'Sanama – Cabernet Sauvignon – Chile 2016',
                price: '90K/400K',
                description: 'Glass/Bottle'
            },
            {
                drinkID: 25,
                descriptor: 'Woolshed – Merlot – Australia 2017',
                price: '95K/450K',
                description: 'Glass/Bottle'
            },
            {
                drinkID: 26,
                descriptor: 'Ribshack – Pinnotage/Merlot – South Africa 2016',
                price: '125K/680K',
                description: 'Glass/Bottle'
            },
            {
                drinkID: 27,
                descriptor: 'Yalumba – Shiraz/Viognier – Australia 2015',
                price: '945K',
                description: 'Bottle'
            },
            {
                drinkID: 28,
                descriptor: 'Alta Vista – Malbec – Argentina 2016',
                price: '1,250K',
                description: 'Bottle'
            }
        ], drinkCategoryID: 6, drinkCategoryName: 'Red Wine'
    },
    {
        drinkCategory: [
            {
                drinkID: 29,
                descriptor: 'Casa Subercaseaux – Sauvignon Blanc – Chile 2017',
                price: '95K/420K',
                description: 'Glass/Bottle'
            },
            {
                drinkID: 31,
                descriptor: 'The Accomplice – Chardonnay – Australia 2016',
                price: '115K/550K',
                description: 'Glass/Bottle'
            },
            {
                drinkID: 32,
                descriptor: 'Allan Scott – Sauvignon Blanc – New Zealand 2017',
                price: '1,000K',
                description: 'Bottle'
            }
        ], drinkCategoryID: 7, drinkCategoryName: 'White Wine'
    },
    {
        drinkCategory: [
            {
                drinkID: 33,
                descriptor: 'Vignerons St. Tropez – Grenache/Cinsault – France',
                price: '1,000K',
                description: 'Bottle'
            },
            {
                drinkID: 34,
                descriptor: 'Tommasi Filo Dora Prosecco – Italy',
                price: '1,200K',
                description: 'Bottle'
            }
        ], drinkCategoryID: 8, drinkCategoryName: 'Rose and Prosecco'
    },
    {
        drinkCategory: [
            {
                drinkID: 33,
                descriptor: 'Fresh Lime Juice',
                price: '40K',
                description: 'false'
            },
            {
                drinkID: 34,
                descriptor: 'Fresh Passion Fruit Juice',
                price: '50K',
                description: 'false'
            },
            {
                drinkID: 33,
                descriptor: 'Fresh Pineapple Juice',
                price: '60K',
                description: 'false'
            },
            {
                drinkID: 34,
                descriptor: 'Fresh Orange Juice',
                price: '60K',
                description: 'false'
            },
            {
                drinkID: 34,
                descriptor: 'Mixed Juice',
                price: '70K',
                description: 'false'
            },
            {
                drinkID: 33,
                descriptor: 'Black Vietnamese Ice Coffee',
                price: '50K',
                description: 'false'
            },
            {
                drinkID: 34,
                descriptor: 'Vietnamese Ice Coffee Fresh/Sweet Milk',
                price: '60K',
                description: 'false'
            }
        ], drinkCategoryID: 11, drinkCategoryName: 'Juices & Coffee'
    }
];
