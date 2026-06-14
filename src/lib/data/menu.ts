export type MenuItem = {
	name: string;
	description: string;
	price: string;
	image: string;
	popular?: boolean;
	veg?: boolean;
	spicy?: boolean;
};

export type MenuCategory = {
	id: string;
	name: string;
	tagline: string;
	items: MenuItem[];
};

/** Stable Unsplash food photography (auto-formatted, cropped for cards). */
const img = (id: string, w = 800) =>
	`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const menu: MenuCategory[] = [
	{
		id: 'breakfast-tacos',
		name: 'Breakfast Tacos',
		tagline: 'Served all morning on fresh-pressed tortillas',
		items: [
			{
				name: 'Potato, Egg & Cheese Taco',
				description:
					'Crispy seasoned potatoes, fluffy scrambled eggs and melted cheese folded into a warm flour tortilla. Our #1 seller.',
				price: '$2.49',
				image: img('1565299624946-b28f40a0ca4b'),
				popular: true,
				veg: true
			},
			{
				name: 'Bacon, Egg & Cheese Taco',
				description: 'Thick-cut smoky bacon, scrambled eggs and cheese on a soft tortilla.',
				price: '$2.99',
				image: img('1551504734-5ee1c4a1479b'),
				popular: true
			},
			{
				name: 'Chorizo & Egg Taco',
				description: 'House-spiced Mexican chorizo scrambled with eggs and a kick of salsa roja.',
				price: '$2.99',
				image: img('1599974579688-8dbdd335c77f'),
				spicy: true
			},
			{
				name: 'Bean & Cheese Taco',
				description: 'Slow-cooked refried beans and melted cheese — simple, hearty, satisfying.',
				price: '$2.29',
				image: img('1626700051175-6818013e1d4f'),
				veg: true
			}
		]
	},
	{
		id: 'burritos',
		name: 'Burritos',
		tagline: 'Big, hand-rolled, and packed wall to wall',
		items: [
			{
				name: 'Breakfast Burrito',
				description:
					'Eggs, potato, cheese and your choice of bacon or chorizo wrapped in a giant flour tortilla.',
				price: '$5.99',
				image: img('1626700051175-6818013e1d4f'),
				popular: true
			},
			{
				name: 'Bean & Cheese Burrito',
				description: 'Refried beans, three-cheese blend and salsa fresca. Add meat for $1.50.',
				price: '$4.49',
				image: img('1584208632869-05fa2b2a5934'),
				veg: true
			},
			{
				name: 'Barbacoa Burrito',
				description: 'Tender slow-cooked barbacoa, rice, beans, onion and cilantro. A full meal.',
				price: '$7.49',
				image: img('1626700051175-6818013e1d4f'),
				popular: true
			}
		]
	},
	{
		id: 'barbacoa',
		name: 'Barbacoa',
		tagline: 'Slow-cooked overnight until it falls apart',
		items: [
			{
				name: 'Barbacoa Taco',
				description:
					'Rich, tender barbacoa on a fresh corn or flour tortilla with onion, cilantro and lime.',
				price: '$3.49',
				image: img('1611250188496-e966043a0629'),
				popular: true
			},
			{
				name: 'Barbacoa Plate',
				description: 'A generous serving of barbacoa with rice, beans and warm tortillas on the side.',
				price: '$9.99',
				image: img('1564767655658-4e6b365884ff')
			}
		]
	},
	{
		id: 'potato-egg-cheese',
		name: 'Potato, Egg & Cheese',
		tagline: 'The Menard classic, every way you like it',
		items: [
			{
				name: 'Classic P.E.C. Taco',
				description: 'The original — golden potatoes, eggs and cheese. Add salsa verde or roja.',
				price: '$2.49',
				image: img('1565299624946-b28f40a0ca4b'),
				popular: true,
				veg: true
			},
			{
				name: 'P.E.C. & Bacon Taco',
				description: 'Our classic loaded with crispy bacon for the hungry mornings.',
				price: '$3.29',
				image: img('1551504734-5ee1c4a1479b')
			},
			{
				name: 'P.E.C. Breakfast Plate',
				description: 'Two potato-egg-cheese tacos with a side of beans and fresh salsa.',
				price: '$6.49',
				image: img('1504674900247-0877df9cc836'),
				veg: true
			}
		]
	},
	{
		id: 'lunch-specials',
		name: 'Lunch Specials',
		tagline: 'Available daily 11am–3pm',
		items: [
			{
				name: 'Three-Taco Plate',
				description: 'Any three tacos with rice, beans and chips & salsa. Best value on the menu.',
				price: '$9.99',
				image: img('1565299585323-38d6b0865b47'),
				popular: true
			},
			{
				name: 'Quesadilla Especial',
				description: 'Grilled flour tortilla stuffed with cheese and your choice of barbacoa or chicken.',
				price: '$7.49',
				image: img('1618040996337-56904b7850b9')
			},
			{
				name: 'Taco Salad',
				description: 'Crisp greens, beans, cheese, pico de gallo and seasoned meat in a tortilla bowl.',
				price: '$8.49',
				image: img('1512621776951-a57141f2eefd'),
				veg: false
			}
		]
	},
	{
		id: 'drinks',
		name: 'Drinks',
		tagline: 'Ice-cold and house-made',
		items: [
			{
				name: 'Horchata',
				description: 'Creamy cinnamon-rice horchata made fresh every day.',
				price: '$2.49',
				image: img('1541658016709-82535e94bc69'),
				popular: true,
				veg: true
			},
			{
				name: 'Jamaica (Hibiscus)',
				description: 'Tart and refreshing hibiscus agua fresca.',
				price: '$2.49',
				image: img('1497534446932-c925b458314a'),
				veg: true
			},
			{
				name: 'Mexican Coca-Cola',
				description: 'The real deal — bottled with cane sugar.',
				price: '$2.29',
				image: img('1554866585-cd94860890b7')
			},
			{
				name: 'Fresh Coffee',
				description: 'Hot, bottomless drip coffee to start the morning right.',
				price: '$1.79',
				image: img('1509042239860-f550ce710b93'),
				veg: true
			}
		]
	},
	{
		id: 'salsa-sides',
		name: 'Salsa & Sides',
		tagline: 'Made from scratch in-house',
		items: [
			{
				name: 'Chips & Salsa',
				description: 'Warm tortilla chips with our roasted salsa roja and salsa verde.',
				price: '$3.49',
				image: img('1613514785940-daed07799d9b'),
				popular: true,
				veg: true,
				spicy: true
			},
			{
				name: 'Guacamole',
				description: 'Hand-mashed avocado with lime, onion, cilantro and a pinch of salt.',
				price: '$3.99',
				image: img('1600335895229-6e75511892c8'),
				veg: true
			},
			{
				name: 'Rice & Beans',
				description: 'Mexican rice and refried beans — the perfect side.',
				price: '$2.99',
				image: img('1604908176997-125f25cc6f3d'),
				veg: true
			},
			{
				name: 'House Salsa (Pint)',
				description: 'Take home a pint of our famous roasted salsa.',
				price: '$4.99',
				image: img('1592417817098-8fd3d9eb14a5'),
				veg: true,
				spicy: true
			}
		]
	}
];

/** Flattened popular items for the home page highlight grid. */
export const popularItems: MenuItem[] = menu
	.flatMap((c) => c.items)
	.filter((i) => i.popular)
	.slice(0, 4);
