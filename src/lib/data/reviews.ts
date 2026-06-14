export type Review = {
	name: string;
	initials: string;
	rating: number;
	date: string;
	text: string;
	tag?: string;
};

export const reviews: Review[] = [
	{
		name: 'Marisol G.',
		initials: 'MG',
		rating: 5,
		date: '2 weeks ago',
		text: 'Huge tacos with fresh tortillas and amazing salsa. You can taste that everything is made fresh. Easily the best stop in Menard.',
		tag: 'Breakfast Tacos'
	},
	{
		name: 'Dustin R.',
		initials: 'DR',
		rating: 5,
		date: '1 month ago',
		text: 'Great value, fast service, and delicious breakfast tacos. The drive-through line moves quick even on busy mornings.',
		tag: 'Drive-Through'
	},
	{
		name: 'Anita P.',
		initials: 'AP',
		rating: 5,
		date: '1 month ago',
		text: 'Perfect stop for authentic Mexican food. The barbacoa melts in your mouth and the horchata is the real deal.',
		tag: 'Barbacoa'
	},
	{
		name: 'Travis W.',
		initials: 'TW',
		rating: 4,
		date: '2 months ago',
		text: 'Potato egg and cheese taco is my go-to every morning. Big portions and friendly people. Cash and card both work.',
		tag: 'Breakfast Tacos'
	},
	{
		name: 'Brenda S.',
		initials: 'BS',
		rating: 4,
		date: '3 months ago',
		text: 'Family-owned and it shows. Tortillas are pressed fresh and the staff treats you like a regular from day one.',
		tag: 'Service'
	},
	{
		name: 'Carlos M.',
		initials: 'CM',
		rating: 5,
		date: '3 months ago',
		text: 'Stopped on a road trip through Menard and ordered three tacos. Cheap, fast, and genuinely some of the best I have had in West Texas.',
		tag: 'Lunch Specials'
	}
];

/** Star distribution used for the review statistics bars. */
export const ratingBreakdown = [
	{ stars: 5, count: 52 },
	{ stars: 4, count: 21 },
	{ stars: 3, count: 8 },
	{ stars: 2, count: 3 },
	{ stars: 1, count: 3 }
];
