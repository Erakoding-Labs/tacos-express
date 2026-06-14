<script lang="ts">
	import { business } from '$lib/data/business';
	import Button from '$lib/components/ui/Button.svelte';
	import Stars from '$lib/components/ui/Stars.svelte';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Car from '@lucide/svelte/icons/car';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	const heroImg =
		'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1400&q=80';
</script>

<section class="relative overflow-hidden bg-charcoal-950 pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
	<!-- Ambient color glows -->
	<div class="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-chili-600/30 blur-[120px]"></div>
	<div class="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sunset-500/25 blur-[120px]"></div>

	<div class="container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
		<!-- Copy -->
		<div class="flex flex-col items-start gap-6">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cream-100 backdrop-blur"
			>
				<span class="relative flex h-2 w-2">
					<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-cilantro-400 opacity-75"></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-cilantro-400"></span>
				</span>
				Now serving fresh — open this morning
			</div>

			<h1 class="text-balance font-display text-5xl font-extrabold leading-[1.02] text-cream-50 sm:text-6xl lg:text-7xl">
				The Best
				<span class="text-gradient">Tacos</span>
				in Menard
			</h1>

			<p class="max-w-xl text-balance text-lg leading-relaxed text-cream-200/80">
				Fresh-pressed tortillas, slow-cooked barbacoa, and our famous potato, egg &amp; cheese
				tacos — made from scratch every day with authentic Mexican flavor and big West-Texas
				portions.
			</p>

			<div class="flex flex-col gap-3 sm:flex-row">
				<Button href="/menu" variant="accent" size="lg">
					View Menu <ArrowRight size={18} />
				</Button>
				<Button href={business.mapsLink} variant="light" size="lg">
					<MapPin size={18} /> Visit Us Today
				</Button>
			</div>

			<!-- Trust strip -->
			<div class="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream-200/80">
				<div class="flex items-center gap-2">
					<Stars rating={business.rating} size={16} />
					<span class="font-semibold text-cream-50">{business.rating}</span>
					<span class="text-cream-200/60">({business.reviewCount} reviews)</span>
				</div>
				<span class="hidden h-4 w-px bg-white/15 sm:block"></span>
				<div class="flex items-center gap-2">
					<Car size={16} class="text-cilantro-400" /> Fast drive-through
				</div>
				<span class="hidden h-4 w-px bg-white/15 sm:block"></span>
				<div class="font-semibold text-cream-50">Just {business.priceRange}</div>
			</div>
		</div>

		<!-- Visual -->
		<div class="relative">
			<div class="relative mx-auto max-w-md lg:max-w-none">
				<div class="animate-float overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
					<img
						src={heroImg}
						alt="Fresh Mexican tacos with cilantro, onion and lime from Taco Express"
						class="aspect-[4/5] w-full object-cover"
						fetchpriority="high"
					/>
				</div>

				<!-- Floating rating card -->
				<div
					class="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-cream-50 p-4 shadow-xl sm:-left-8"
				>
					<div class="grid h-12 w-12 place-items-center rounded-xl brand-gradient font-display text-xl font-extrabold text-white">
						4.1
					</div>
					<div>
						<Stars rating={business.rating} size={14} />
						<p class="text-xs font-medium text-charcoal-700/70">Loved by locals</p>
					</div>
				</div>

				<!-- Floating price tag -->
				<div
					class="absolute -right-3 top-6 rotate-3 rounded-2xl bg-sunset-500 px-4 py-2 text-center font-display font-bold text-white shadow-xl sm:-right-6"
				>
					<span class="block text-[0.6rem] font-semibold uppercase tracking-widest opacity-90">From</span>
					<span class="text-xl">$2.49</span>
				</div>
			</div>
		</div>
	</div>
</section>
