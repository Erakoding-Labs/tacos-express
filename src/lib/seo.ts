import { business, fullAddress, openingHoursSchema } from '$lib/data/business';

export type SeoInput = {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
	type?: 'website' | 'article';
};

const DEFAULT_IMAGE =
	'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1200&q=80';

export function buildSeo(input: SeoInput = {}) {
	const title = input.title
		? `${input.title} | ${business.name}`
		: `${business.name} — ${business.tagline} | ${business.address.city}, ${business.address.state}`;
	const description = input.description ?? business.description;
	const url = `${business.url}${input.path ?? '/'}`;
	const image = input.image ?? DEFAULT_IMAGE;
	return { title, description, url, image, type: input.type ?? 'website' };
}

/** Schema.org LocalBusiness / Restaurant JSON-LD for the whole site. */
export function localBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		'@id': `${business.url}/#restaurant`,
		name: business.name,
		description: business.description,
		url: business.url,
		telephone: business.phone,
		email: business.email,
		priceRange: business.priceRangeSchema,
		servesCuisine: business.cuisine,
		image: DEFAULT_IMAGE,
		address: {
			'@type': 'PostalAddress',
			streetAddress: business.address.street,
			addressLocality: business.address.city,
			addressRegion: business.address.state,
			postalCode: business.address.zip,
			addressCountry: business.address.countryCode
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: business.geo.lat,
			longitude: business.geo.lng
		},
		hasMap: business.social.google,
		openingHoursSpecification: openingHoursSchema,
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: business.rating,
			reviewCount: business.reviewCount,
			bestRating: 5,
			worstRating: 1
		},
		acceptsReservations: false,
		menu: `${business.url}/menu`,
		sameAs: [business.social.facebook, business.social.instagram, business.social.yelp]
	};
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.name,
			item: `${business.url}${item.path}`
		}))
	};
}

export { fullAddress };
