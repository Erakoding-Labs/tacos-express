<script lang="ts">
	import { gallery, type GalleryImage } from '$lib/data/gallery';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBanner from '$lib/components/sections/CtaBanner.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { cn } from '$lib/utils';
	import { breadcrumbSchema } from '$lib/seo';
	import X from '@lucide/svelte/icons/x';

	const categories = ['All', ...Array.from(new Set(gallery.map((g) => g.category)))];
	let filter = $state<string>('All');
	let active = $state<GalleryImage | null>(null);

	const visible = $derived(
		filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)
	);

	function close() {
		active = null;
	}
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

<Seo
	title="Gallery"
	description="A look inside Taco Express in Menard, TX — fresh tacos, hand-rolled burritos, house-made salsa, our kitchen and the drive-through."
	path="/gallery"
	jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])]}
/>

<PageHero
	eyebrow="Gallery"
	title="Come hungry, leave happy"
	description="Fresh tacos, sizzling griddles and the food our neighbors line up for. Here's a taste of Taco Express."
	image="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1400&q=80"
/>

<section class="bg-cream-50 py-16 lg:py-24">
	<div class="container-px flex flex-col gap-10">
		<!-- Filter -->
		<div class="flex flex-wrap justify-center gap-2">
			{#each categories as cat}
				<button
					onclick={() => (filter = cat)}
					class={filter === cat
						? 'rounded-full bg-chili-600 px-5 py-2 text-sm font-semibold text-white shadow-sm'
						: 'rounded-full border border-charcoal-900/10 bg-white px-5 py-2 text-sm font-semibold text-charcoal-700 transition-colors hover:border-chili-600 hover:text-chili-700'}
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- Masonry grid -->
		<div class="columns-1 gap-5 sm:columns-2 lg:columns-3">
			{#each visible as image (image.src)}
				<button
					use:reveal
					onclick={() => (active = image)}
					class="group mb-5 block w-full overflow-hidden rounded-3xl shadow-sm transition-shadow hover:shadow-xl"
				>
					<div class="relative">
						<img
							src={image.src}
							alt={image.alt}
							loading="lazy"
							class={cn(
								'w-full object-cover transition-transform duration-700 group-hover:scale-105',
								image.span ? 'aspect-[4/5]' : 'aspect-square'
							)}
						/>
						<div class="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<div class="p-5 text-left">
								<span class="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
									{image.category}
								</span>
								<p class="mt-2 text-sm font-medium text-white">{image.alt}</p>
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Lightbox -->
{#if active}
	<div
		class="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-950/90 p-4 backdrop-blur"
		role="dialog"
		aria-modal="true"
		aria-label={active.alt}
		tabindex="-1"
		onclick={close}
		onkeydown={(e) => e.key === 'Enter' && close()}
	>
		<button
			class="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
			onclick={close}
			aria-label="Close"
		>
			<X size={22} />
		</button>
		<figure class="max-h-[85vh] max-w-4xl">
			<img src={active.src} alt={active.alt} class="max-h-[78vh] w-auto rounded-2xl object-contain" />
			<figcaption class="mt-3 text-center text-sm text-cream-200/80">{active.alt}</figcaption>
		</figure>
	</div>
{/if}

<CtaBanner />
