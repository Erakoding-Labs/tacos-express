<script lang="ts">
	import Star from '@lucide/svelte/icons/star';
	import { cn } from '$lib/utils';

	let {
		rating = 5,
		size = 16,
		class: className
	}: { rating?: number; size?: number; class?: string } = $props();

	const full = $derived(Math.floor(rating));
	const hasHalf = $derived(rating - full >= 0.5);
</script>

<div class={cn('inline-flex items-center gap-0.5', className)} aria-label={`${rating} out of 5 stars`}>
	{#each Array(5) as _, i}
		{@const filled = i < full || (i === full && hasHalf)}
		<Star
			{size}
			class={cn(
				filled ? 'fill-sunset-400 text-sunset-400' : 'fill-charcoal-900/10 text-charcoal-900/15'
			)}
		/>
	{/each}
</div>
