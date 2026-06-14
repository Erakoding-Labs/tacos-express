/**
 * Single source of truth for the Taco Express business / NAP data.
 * Reused across SEO schema, the footer, the contact page and structured data.
 */
export const business = {
	name: 'Taco Express',
	legalName: 'Taco Express',
	tagline: 'The Best Tacos in Menard',
	description:
		'Family-owned Mexican restaurant in Menard, Texas serving fresh breakfast tacos, burritos, barbacoa and handmade tortillas with authentic flavor and big portions.',
	category: 'Mexican Restaurant',
	cuisine: ['Mexican', 'Tex-Mex', 'Breakfast'],
	priceRange: '$1–10',
	priceRangeSchema: '$',
	rating: 4.1,
	reviewCount: 87,
	url: 'https://tacoexpress-menard.com',
	email: 'hello@tacoexpress-menard.com',
	phone: '+1 325-396-2251',
	phoneHref: 'tel:+13253962251',
	address: {
		street: '708 Frisco Ave',
		city: 'Menard',
		state: 'TX',
		stateName: 'Texas',
		zip: '76859',
		country: 'United States',
		countryCode: 'US'
	},
	geo: {
		// Menard, TX — approximate coordinates for 708 Frisco Ave
		lat: 30.9179,
		lng: -99.7862
	},
	service: {
		dineIn: true,
		driveThrough: true,
		delivery: false,
		takeout: true
	},
	hours: [
		{ day: 'Monday', open: '06:30', close: '15:00' },
		{ day: 'Tuesday', open: '06:30', close: '15:00' },
		{ day: 'Wednesday', open: '06:30', close: '15:00' },
		{ day: 'Thursday', open: '06:30', close: '15:00' },
		{ day: 'Friday', open: '06:30', close: '16:00' },
		{ day: 'Saturday', open: '07:00', close: '14:00' },
		{ day: 'Sunday', open: 'Closed', close: 'Closed' }
	],
	social: {
		facebook: 'https://facebook.com/',
		instagram: 'https://instagram.com/',
		yelp: 'https://yelp.com/',
		google: 'https://www.google.com/maps?q=Taco+Express+Menard+TX'
	},
	mapsEmbed:
		'https://www.google.com/maps?q=708+Frisco+Ave,+Menard,+TX+76859&output=embed',
	mapsLink: 'https://www.google.com/maps/dir/?api=1&destination=708+Frisco+Ave,+Menard,+TX+76859'
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

/** Schema.org openingHoursSpecification helper. */
export const openingHoursSchema = business.hours
	.filter((h) => h.open !== 'Closed')
	.map((h) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: h.day,
		opens: h.open,
		closes: h.close
	}));
