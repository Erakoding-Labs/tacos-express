export type GalleryImage = {
	src: string;
	alt: string;
	category: 'Tacos' | 'Burritos' | 'Salsa' | 'Atmosphere' | 'Drive-Through' | 'Prep';
	span?: boolean;
};

const img = (id: string, w = 900) =>
	`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryImage[] = [
	{ src: img('1565299624946-b28f40a0ca4b', 1100), alt: 'Fresh potato, egg and cheese tacos', category: 'Tacos', span: true },
	{ src: img('1611250188496-e966043a0629'), alt: 'Tender barbacoa tacos with cilantro and onion', category: 'Tacos' },
	{ src: img('1626700051175-6818013e1d4f'), alt: 'Hand-rolled breakfast burrito', category: 'Burritos' },
	{ src: img('1613514785940-daed07799d9b'), alt: 'House-made salsa roja and tortilla chips', category: 'Salsa' },
	{ src: img('1504674900247-0877df9cc836', 1100), alt: 'Warm taco plate with rice and beans', category: 'Atmosphere', span: true },
	{ src: img('1600335895229-6e75511892c8'), alt: 'Hand-mashed guacamole', category: 'Salsa' },
	{ src: img('1565299585323-38d6b0865b47'), alt: 'Three-taco lunch plate', category: 'Tacos' },
	{ src: img('1518779578993-ec3579fee39f'), alt: 'Friendly counter service at the window', category: 'Drive-Through' },
	{ src: img('1556910103-1c02745aae4d', 1100), alt: 'Fresh tortillas being pressed in the kitchen', category: 'Prep', span: true },
	{ src: img('1541658016709-82535e94bc69'), alt: 'Creamy house-made horchata', category: 'Drive-Through' },
	{ src: img('1584208632869-05fa2b2a5934'), alt: 'Bean and cheese burrito cut in half', category: 'Burritos' },
	{ src: img('1599974579688-8dbdd335c77f'), alt: 'Chorizo and egg cooking on the flat-top', category: 'Prep' }
];
