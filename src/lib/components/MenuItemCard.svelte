<script lang="ts">
	import type { MenuItem } from '$lib/data/menu';
	import { reveal } from '$lib/actions/reveal';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Flame from '@lucide/svelte/icons/flame';
	import Leaf from '@lucide/svelte/icons/leaf';
	import Star from '@lucide/svelte/icons/star';

	let { item, delay = 0 }: { item: MenuItem; delay?: number } = $props();
</script>

<article
	use:reveal={{ delay }}
	class="group flex flex-col overflow-hidden rounded-3xl border border-charcoal-900/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-chili-900/10"
>
	<div class="relative aspect-[4/3] overflow-hidden">
		<img
			src={item.image}
			alt={item.name}
			loading="lazy"
			class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/35 to-transparent"></div>
		{#if item.popular}
			<div class="absolute left-3 top-3">
				<Badge variant="popular">
					<Star size={11} class="fill-white" /> Popular
				</Badge>
			</div>
		{/if}
		<div class="absolute right-3 top-3 flex gap-1.5">
			{#if item.veg}
				<span class="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-cilantro-600" title="Vegetarian">
					<Leaf size={13} />
				</span>
			{/if}
			{#if item.spicy}
				<span class="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-chili-600" title="Spicy">
					<Flame size={13} />
				</span>
			{/if}
		</div>
	</div>

	<div class="flex flex-1 flex-col gap-2 p-5">
		<div class="flex items-start justify-between gap-3">
			<h3 class="font-display text-lg font-bold leading-snug text-charcoal-900">
				{item.name}
			</h3>
			<span class="shrink-0 rounded-full bg-cream-100 px-3 py-1 font-display text-base font-bold text-chili-700">
				{item.price}
			</span>
		</div>
		<p class="text-sm leading-relaxed text-charcoal-700/75">{item.description}</p>
	</div>
</article>
