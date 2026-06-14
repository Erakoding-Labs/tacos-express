<script lang="ts">
	import type { Review } from '$lib/data/reviews';
	import { reveal } from '$lib/actions/reveal';
	import Stars from '$lib/components/ui/Stars.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Quote from '@lucide/svelte/icons/quote';

	let { review, delay = 0 }: { review: Review; delay?: number } = $props();
</script>

<figure
	use:reveal={{ delay }}
	class="relative flex h-full flex-col gap-4 rounded-3xl border border-charcoal-900/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-chili-900/5"
>
	<Quote size={36} class="text-chili-600/15" />
	<Stars rating={review.rating} size={16} />
	<blockquote class="flex-1 text-[0.97rem] leading-relaxed text-charcoal-800">
		“{review.text}”
	</blockquote>
	<figcaption class="flex items-center gap-3 border-t border-charcoal-900/5 pt-4">
		<div
			class="grid h-11 w-11 shrink-0 place-items-center rounded-full brand-gradient font-display text-sm font-bold text-white"
		>
			{review.initials}
		</div>
		<div class="min-w-0">
			<div class="font-semibold text-charcoal-900">{review.name}</div>
			<div class="text-xs text-charcoal-700/60">{review.date}</div>
		</div>
		{#if review.tag}
			<div class="ml-auto hidden sm:block">
				<Badge variant="outline" size="xs">{review.tag}</Badge>
			</div>
		{/if}
	</figcaption>
</figure>
