<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import CtaBanner from '$lib/components/sections/CtaBanner.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { breadcrumbSchema } from '$lib/seo';
	import Heart from '@lucide/svelte/icons/heart';
	import Wheat from '@lucide/svelte/icons/wheat';
	import Users from '@lucide/svelte/icons/users';
	import HandPlatter from '@lucide/svelte/icons/hand-platter';

	const values = [
		{ icon: Wheat, title: 'Fresh Tortillas', text: 'Pressed and griddled by hand throughout the day — never from a bag.' },
		{ icon: Heart, title: 'Made With Care', text: 'Family recipes passed down and cooked the slow, honest way.' },
		{ icon: HandPlatter, title: 'Generous Portions', text: 'We send everyone home full. Big tacos, fair prices, no exceptions.' },
		{ icon: Users, title: 'Community First', text: 'Proud to feed our Menard neighbors, ranchers and road-trippers alike.' }
	];

	const stats = [
		{ value: '100%', label: 'Made from scratch' },
		{ value: '4.1★', label: '87 happy reviews' },
		{ value: 'Daily', label: 'Fresh tortillas' },
		{ value: '$1–10', label: 'Honest prices' }
	];
</script>

<Seo
	title="About Us"
	description="The Taco Express story — a family-owned Mexican restaurant in Menard, TX serving handmade tortillas, fresh ingredients and authentic flavor to our community."
	path="/about"
	jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
/>

<PageHero
	eyebrow="Our Story"
	title="A family kitchen at the heart of Menard"
	description="Taco Express started with a simple idea: serve the kind of fresh, honest Mexican food we grew up on — and treat every customer like family."
	image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=80"
/>

<!-- Story -->
<section class="bg-cream-50 py-20 lg:py-28">
	<div class="container-px grid items-center gap-12 lg:grid-cols-2">
		<div use:reveal={{ delay: 0 }} class="relative">
			<img
				src="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=900&q=80"
				alt="Chorizo and eggs cooking fresh on the flat-top griddle"
				class="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
				loading="lazy"
			/>
			<div class="absolute -bottom-6 -right-4 max-w-[14rem] rounded-2xl bg-white p-5 shadow-xl sm:-right-8">
				<p class="font-display text-lg font-bold text-charcoal-900">“Pressed fresh, every order.”</p>
				<p class="mt-1 text-sm text-charcoal-700/70">— The Taco Express family</p>
			</div>
		</div>

		<div use:reveal={{ delay: 120 }} class="flex flex-col gap-5">
			<SectionHeading
				align="left"
				eyebrow="Family Owned"
				title="Real ingredients, real people"
			/>
			<div class="flex flex-col gap-4 text-base leading-relaxed text-charcoal-700/85">
				<p>
					For years, Taco Express has been a Menard morning ritual. It began as a small
					family-run kitchen with a big commitment: use fresh ingredients, press our own
					tortillas, and never cut a corner customers can taste.
				</p>
				<p>
					Every morning starts before sunrise — beans simmering, salsa roasting, barbacoa
					that's been cooking low and slow overnight. Our potato, egg &amp; cheese taco became
					a local legend, and we've been keeping breakfast (and lunch) honest ever since.
				</p>
				<p>
					Whether you dine in, take it to go, or roll through the drive-through, you're getting
					food made with the same care we'd serve our own family. That's the Taco Express promise.
				</p>
			</div>
			<div class="pt-2">
				<Button href="/menu" variant="primary" size="md">See What We Make</Button>
			</div>
		</div>
	</div>
</section>

<!-- Stats strip -->
<section class="brand-gradient py-12">
	<div class="container-px grid grid-cols-2 gap-6 lg:grid-cols-4">
		{#each stats as stat, i}
			<div use:reveal={{ delay: i * 80 }} class="text-center text-white">
				<div class="font-display text-4xl font-extrabold sm:text-5xl">{stat.value}</div>
				<div class="mt-1 text-sm font-medium text-white/80">{stat.label}</div>
			</div>
		{/each}
	</div>
</section>

<!-- Values -->
<section class="bg-white py-20 lg:py-28">
	<div class="container-px flex flex-col gap-14">
		<SectionHeading
			eyebrow="What We Stand For"
			title="The things we never compromise on"
		/>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each values as value, i}
				<div
					use:reveal={{ delay: i * 90 }}
					class="flex flex-col gap-4 rounded-3xl border border-charcoal-900/5 bg-cream-50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-chili-900/5"
				>
					<div class="grid h-14 w-14 place-items-center rounded-2xl brand-gradient text-white shadow-lg shadow-chili-600/20">
						<value.icon size={26} />
					</div>
					<h3 class="font-display text-xl font-bold text-charcoal-900">{value.title}</h3>
					<p class="text-sm leading-relaxed text-charcoal-700/75">{value.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<CtaBanner />
