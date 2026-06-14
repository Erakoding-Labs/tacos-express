<script lang="ts">
	import { menu } from '$lib/data/menu';
	import { business } from '$lib/data/business';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import MenuItemCard from '$lib/components/MenuItemCard.svelte';
	import CtaBanner from '$lib/components/sections/CtaBanner.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { breadcrumbSchema } from '$lib/seo';
	import Leaf from '@lucide/svelte/icons/leaf';
	import Flame from '@lucide/svelte/icons/flame';
	import Star from '@lucide/svelte/icons/star';

	let active = $state(menu[0].id);

	function scrollTo(id: string) {
		active = id;
		document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	const menuSchema = {
		'@context': 'https://schema.org',
		'@type': 'Menu',
		name: 'Taco Express Menu',
		hasMenuSection: menu.map((c) => ({
			'@type': 'MenuSection',
			name: c.name,
			hasMenuItem: c.items.map((i) => ({
				'@type': 'MenuItem',
				name: i.name,
				description: i.description,
				offers: { '@type': 'Offer', price: i.price.replace('$', ''), priceCurrency: 'USD' }
			}))
		}))
	};
</script>

<Seo
	title="Menu"
	description="Browse the full Taco Express menu — breakfast tacos, burritos, barbacoa, lunch specials, drinks and house-made salsa. Prices from $1.79."
	path="/menu"
	jsonLd={[menuSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Menu', path: '/menu' }])]}
/>

<PageHero
	eyebrow="Our Menu"
	title="Made fresh, priced right"
	description="Everything is made from scratch daily. Tacos start at just $2.29 — and yes, the portions really are that big."
	image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
/>

<!-- Sticky category nav -->
<div class="sticky top-16 z-30 border-y border-charcoal-900/5 bg-cream-50/90 backdrop-blur-lg">
	<div class="container-px flex gap-2 overflow-x-auto py-4">
		{#each menu as cat}
			<button
				onclick={() => scrollTo(cat.id)}
				class={active === cat.id
					? 'shrink-0 rounded-full bg-chili-600 px-4 py-2 text-sm font-semibold text-white shadow-sm'
					: 'shrink-0 rounded-full border border-charcoal-900/10 bg-white px-4 py-2 text-sm font-semibold text-charcoal-700 transition-colors hover:border-chili-600 hover:text-chili-700'}
			>
				{cat.name}
			</button>
		{/each}
	</div>
</div>

<div class="bg-cream-50">
	<!-- Legend -->
	<div class="container-px flex flex-wrap items-center gap-x-6 gap-y-2 pt-10 text-xs font-medium text-charcoal-700/70">
		<span class="flex items-center gap-1.5"><Star size={13} class="fill-sunset-400 text-sunset-400" /> Popular</span>
		<span class="flex items-center gap-1.5"><Leaf size={13} class="text-cilantro-600" /> Vegetarian</span>
		<span class="flex items-center gap-1.5"><Flame size={13} class="text-chili-600" /> Spicy</span>
	</div>

	{#each menu as cat (cat.id)}
		<section id={`cat-${cat.id}`} class="container-px scroll-mt-32 py-14">
			<div use:reveal class="mb-8 flex flex-col gap-1.5">
				<h2 class="font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
					{cat.name}
				</h2>
				<p class="text-charcoal-700/70">{cat.tagline}</p>
			</div>
			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each cat.items as item, i}
					<MenuItemCard {item} delay={i * 70} />
				{/each}
			</div>
		</section>
	{/each}

	<p class="container-px pb-12 text-center text-sm text-charcoal-700/60">
		Prices and availability may vary. Call us at
		<a href={business.phoneHref} class="font-semibold text-chili-700">{business.phone}</a>
		to confirm today's specials.
	</p>
</div>

<CtaBanner />
