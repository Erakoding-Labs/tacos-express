<script lang="ts">
	import { business, fullAddress } from '$lib/data/business';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Phone from '@lucide/svelte/icons/phone';
	import Clock from '@lucide/svelte/icons/clock';
	import Navigation from '@lucide/svelte/icons/navigation';

	// Sunday = 0 ... map to our hours array (Mon-first). Static for prerender.
	let { showHeading = true }: { showHeading?: boolean } = $props();
</script>

<section class="bg-white py-20 lg:py-28">
	<div class="container-px flex flex-col gap-14">
		{#if showHeading}
			<SectionHeading
				eyebrow="Find Us"
				title="Stop by Taco Express"
				description="We're right on Frisco Ave in the heart of Menard — dine in, grab it to go, or roll through the drive-through."
			/>
		{/if}

		<div class="grid gap-8 lg:grid-cols-2">
			<!-- Map -->
			<div
				use:reveal={{ delay: 0 }}
				class="overflow-hidden rounded-3xl border border-charcoal-900/5 shadow-lg"
			>
				<iframe
					title="Map to Taco Express, Menard, Texas"
					src={business.mapsEmbed}
					class="h-full min-h-[360px] w-full"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<!-- Info -->
			<div use:reveal={{ delay: 120 }} class="flex flex-col gap-5">
				<div class="flex flex-col gap-5 rounded-3xl border border-charcoal-900/5 bg-cream-50 p-7">
					<div class="flex gap-4">
						<div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl brand-gradient text-white">
							<MapPin size={22} />
						</div>
						<div>
							<h3 class="font-display text-lg font-bold text-charcoal-900">Address</h3>
							<p class="text-charcoal-700/80">{fullAddress}</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl brand-gradient text-white">
							<Phone size={22} />
						</div>
						<div>
							<h3 class="font-display text-lg font-bold text-charcoal-900">Phone</h3>
							<a href={business.phoneHref} class="text-charcoal-700/80 hover:text-chili-700">
								{business.phone}
							</a>
						</div>
					</div>
				</div>

				<!-- Hours table -->
				<div class="rounded-3xl border border-charcoal-900/5 bg-cream-50 p-7">
					<div class="mb-4 flex items-center gap-3">
						<Clock size={20} class="text-chili-600" />
						<h3 class="font-display text-lg font-bold text-charcoal-900">Opening Hours</h3>
					</div>
					<ul class="flex flex-col divide-y divide-charcoal-900/5">
						{#each business.hours as h}
							<li class="flex items-center justify-between py-2.5 text-sm">
								<span class="font-medium text-charcoal-800">{h.day}</span>
								<span
									class={h.open === 'Closed'
										? 'font-semibold text-chili-600'
										: 'text-charcoal-700/80'}
								>
									{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
								</span>
							</li>
						{/each}
					</ul>
				</div>

				<Button href={business.mapsLink} variant="primary" size="lg" class="w-full">
					<Navigation size={18} /> Get Directions
				</Button>
			</div>
		</div>
	</div>
</section>
