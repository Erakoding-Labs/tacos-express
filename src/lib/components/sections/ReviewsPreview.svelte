<script lang="ts">
	import { reviews } from '$lib/data/reviews';
	import { business } from '$lib/data/business';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import { reveal } from '$lib/actions/reveal';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const featured = reviews.slice(0, 3);
</script>

<section class="bg-cream-100 py-20 lg:py-28">
	<div class="container-px flex flex-col gap-14">
		<div class="flex flex-col items-center gap-6 text-center">
			<SectionHeading
				eyebrow="Loved by Locals"
				title="Don't just take our word for it"
			/>
			<div
				use:reveal
				class="flex items-center gap-4 rounded-full border border-charcoal-900/5 bg-white px-6 py-3 shadow-sm"
			>
				<span class="font-display text-3xl font-extrabold text-chili-700">{business.rating}</span>
				<span class="h-8 w-px bg-charcoal-900/10"></span>
				<div class="text-left">
					<Stars rating={business.rating} size={16} />
					<p class="text-xs text-charcoal-700/60">{business.reviewCount} Google reviews</p>
				</div>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each featured as review, i}
				<ReviewCard {review} delay={i * 100} />
			{/each}
		</div>

		<div use:reveal class="flex justify-center">
			<Button href="/reviews" variant="primary" size="md">
				Read All Reviews <ArrowRight size={18} />
			</Button>
		</div>
	</div>
</section>
