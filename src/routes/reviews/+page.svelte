<script lang="ts">
	import { reviews, ratingBreakdown } from '$lib/data/reviews';
	import { business } from '$lib/data/business';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ReviewCard from '$lib/components/ReviewCard.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import CtaBanner from '$lib/components/sections/CtaBanner.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { breadcrumbSchema } from '$lib/seo';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import ThumbsUp from '@lucide/svelte/icons/thumbs-up';
	import Repeat from '@lucide/svelte/icons/repeat';

	const total = ratingBreakdown.reduce((a, b) => a + b.count, 0);

	const trust = [
		{ icon: ShieldCheck, value: '4.1 / 5', label: 'Average rating' },
		{ icon: ThumbsUp, value: '84%', label: '4 & 5 star reviews' },
		{ icon: Repeat, value: 'Regulars', label: 'Locals come back daily' }
	];
</script>

<Seo
	title="Reviews"
	description="See what locals say about Taco Express in Menard, TX — rated 4.1★ across 87 reviews for fresh tortillas, big tacos, fast service and amazing salsa."
	path="/reviews"
	jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Reviews', path: '/reviews' }])]}
/>

<PageHero
	eyebrow="Customer Reviews"
	title="What Menard is saying"
	description="Honest words from real customers. We're grateful for every visit — here's a taste of the feedback that keeps us cooking."
	image="https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=1400&q=80"
/>

<!-- Rating summary -->
<section class="bg-cream-50 py-16 lg:py-20">
	<div class="container-px grid gap-8 lg:grid-cols-[340px_1fr] lg:items-center">
		<!-- Big score -->
		<div use:reveal class="flex flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-sm">
			<div class="font-display text-6xl font-extrabold text-chili-700">{business.rating}</div>
			<Stars rating={business.rating} size={22} />
			<p class="text-sm text-charcoal-700/70">Based on {business.reviewCount} reviews</p>
		</div>

		<!-- Breakdown bars -->
		<div use:reveal={{ delay: 100 }} class="flex flex-col gap-3 rounded-3xl bg-white p-8 shadow-sm">
			{#each ratingBreakdown as row}
				<div class="flex items-center gap-3">
					<span class="w-12 shrink-0 text-sm font-semibold text-charcoal-700">{row.stars} star</span>
					<div class="h-2.5 flex-1 overflow-hidden rounded-full bg-cream-200">
						<div
							class="h-full rounded-full bg-sunset-500"
							style={`width:${(row.count / total) * 100}%`}
						></div>
					</div>
					<span class="w-8 shrink-0 text-right text-sm text-charcoal-700/60">{row.count}</span>
				</div>
			{/each}
		</div>
	</div>

	<!-- Trust strip -->
	<div class="container-px mt-8 grid gap-6 sm:grid-cols-3">
		{#each trust as t, i}
			<div
				use:reveal={{ delay: i * 90 }}
				class="flex items-center gap-4 rounded-2xl border border-charcoal-900/5 bg-white p-5 shadow-sm"
			>
				<div class="grid h-12 w-12 shrink-0 place-items-center rounded-xl brand-gradient text-white">
					<t.icon size={22} />
				</div>
				<div>
					<div class="font-display text-xl font-bold text-charcoal-900">{t.value}</div>
					<div class="text-sm text-charcoal-700/70">{t.label}</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- All reviews -->
<section class="bg-white py-16 lg:py-24">
	<div class="container-px grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each reviews as review, i}
			<ReviewCard {review} delay={(i % 3) * 100} />
		{/each}
	</div>

	<div use:reveal class="container-px mt-12 flex flex-col items-center gap-4 text-center">
		<p class="text-charcoal-700/70">Been in lately? We'd love to hear about your visit.</p>
		<Button href={business.social.google} variant="primary" size="md">Leave a Google Review</Button>
	</div>
</section>

<CtaBanner />
