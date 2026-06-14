<script lang="ts">
	import { business, fullAddress } from '$lib/data/business';
	import Phone from '@lucide/svelte/icons/phone';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import Facebook from '$lib/components/icons/Facebook.svelte';
	import Car from '@lucide/svelte/icons/car';
	import UtensilsCrossed from '@lucide/svelte/icons/utensils-crossed';

	const year = 2026;
	const links = [
		{ href: '/menu', label: 'Menu' },
		{ href: '/about', label: 'About Us' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<footer class="bg-charcoal-950 text-cream-100">
	<div class="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
		<!-- Brand -->
		<div class="flex flex-col gap-4 lg:col-span-1">
			<a href="/" class="flex items-center gap-2.5">
				<span
					class="grid h-10 w-10 place-items-center rounded-xl brand-gradient font-display text-lg font-extrabold text-white"
				>
					TE
				</span>
				<span class="font-display text-xl font-extrabold text-cream-50">Taco Express</span>
			</a>
			<p class="text-sm leading-relaxed text-cream-200/70">
				Family-owned authentic Mexican food in Menard, Texas. Fresh tortillas, big tacos, and the
				best salsa in town — made from scratch every single day.
			</p>
			<div class="flex gap-3 pt-1">
				<a
					href={business.social.instagram}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					class="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream-100 transition-colors hover:bg-chili-600"
				>
					<Instagram size={18} />
				</a>
				<a
					href={business.social.facebook}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Facebook"
					class="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-cream-100 transition-colors hover:bg-chili-600"
				>
					<Facebook size={18} />
				</a>
			</div>
		</div>

		<!-- Explore -->
		<div class="flex flex-col gap-4">
			<h3 class="font-display text-sm font-bold uppercase tracking-[0.18em] text-sunset-300">
				Explore
			</h3>
			<ul class="flex flex-col gap-2.5">
				{#each links as link}
					<li>
						<a
							href={link.href}
							class="text-sm text-cream-200/75 transition-colors hover:text-cream-50"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Visit -->
		<div class="flex flex-col gap-4">
			<h3 class="font-display text-sm font-bold uppercase tracking-[0.18em] text-sunset-300">
				Visit Us
			</h3>
			<ul class="flex flex-col gap-3 text-sm text-cream-200/75">
				<li class="flex gap-3">
					<MapPin size={18} class="mt-0.5 shrink-0 text-chili-500" />
					<a href={business.mapsLink} target="_blank" rel="noopener noreferrer" class="hover:text-cream-50">
						{fullAddress}
					</a>
				</li>
				<li class="flex gap-3">
					<Phone size={18} class="mt-0.5 shrink-0 text-chili-500" />
					<a href={business.phoneHref} class="hover:text-cream-50">{business.phone}</a>
				</li>
				<li class="flex items-center gap-3">
					<UtensilsCrossed size={18} class="shrink-0 text-chili-500" /> Dine-in available
				</li>
				<li class="flex items-center gap-3">
					<Car size={18} class="shrink-0 text-chili-500" /> Drive-through open
				</li>
			</ul>
		</div>

		<!-- Hours -->
		<div class="flex flex-col gap-4">
			<h3 class="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-sunset-300">
				<Clock size={15} /> Hours
			</h3>
			<ul class="flex flex-col gap-1.5 text-sm">
				{#each business.hours as h}
					<li class="flex justify-between gap-4 text-cream-200/75">
						<span>{h.day}</span>
						<span class={h.open === 'Closed' ? 'text-chili-400' : 'text-cream-100'}>
							{h.open === 'Closed' ? 'Closed' : `${h.open} – ${h.close}`}
						</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div
			class="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-200/55 sm:flex-row"
		>
			<p>© {year} Taco Express. All rights reserved.</p>
			<p>
				Authentic Mexican Restaurant · {business.address.city}, {business.address.stateName} ·
				Rated {business.rating}★ ({business.reviewCount} reviews)
			</p>
		</div>
	</div>
</footer>
