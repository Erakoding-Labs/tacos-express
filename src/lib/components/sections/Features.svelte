<script lang="ts">
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Sprout from '@lucide/svelte/icons/sprout';
	import Beef from '@lucide/svelte/icons/beef';
	import Car from '@lucide/svelte/icons/car';
	import Flame from '@lucide/svelte/icons/flame';

	const features = [
		{
			icon: Sprout,
			title: 'Fresh Ingredients Daily',
			text: 'Tortillas pressed, salsa roasted and produce prepped fresh every single morning.'
		},
		{
			icon: Beef,
			title: 'Large Portion Sizes',
			text: 'Generous West-Texas tacos and burritos that actually fill you up — never skimpy.'
		},
		{
			icon: Car,
			title: 'Fast Drive-Through',
			text: 'In a hurry? Our drive-through line moves quick so breakfast is never a wait.'
		},
		{
			icon: Flame,
			title: 'Authentic Mexican Flavor',
			text: 'Family recipes, slow-cooked barbacoa and bold house salsas made from scratch.'
		}
	];
</script>

<section class="bg-cream-50 py-20 lg:py-28">
	<div class="container-px flex flex-col gap-14">
		<SectionHeading
			eyebrow="Why Taco Express"
			title="Real food, made the right way"
			description="We keep it simple: fresh ingredients, honest portions and the authentic flavors our Menard neighbors have loved for years."
		/>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature, i}
				<div
					use:reveal={{ delay: i * 90 }}
					class="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-charcoal-900/5 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-chili-900/5"
				>
					<div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sunset-500/5 transition-transform duration-500 group-hover:scale-150"></div>
					<div
						class="relative grid h-14 w-14 place-items-center rounded-2xl brand-gradient text-white shadow-lg shadow-chili-600/20 transition-transform duration-500 group-hover:-rotate-6"
					>
						<feature.icon size={26} />
					</div>
					<h3 class="relative font-display text-xl font-bold text-charcoal-900">
						{feature.title}
					</h3>
					<p class="relative text-sm leading-relaxed text-charcoal-700/75">{feature.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
