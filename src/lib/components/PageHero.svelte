<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Snippet } from 'svelte';

	let {
		eyebrow,
		title,
		description,
		image,
		children
	}: {
		eyebrow: string;
		title: string;
		description?: string;
		image: string;
		children?: Snippet;
	} = $props();
</script>

<section class="relative overflow-hidden bg-charcoal-950 pt-32 pb-16 lg:pt-40 lg:pb-24">
	<div class="absolute inset-0">
		<img src={image} alt="" class="h-full w-full object-cover opacity-25" />
		<div class="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/85 to-charcoal-950/60"></div>
	</div>
	<div class="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-chili-600/25 blur-[120px]"></div>

	<div use:reveal class="container-px relative flex max-w-3xl flex-col gap-5">
		<span class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sunset-300">
			<span class="h-px w-6 bg-current opacity-60"></span>
			{eyebrow}
		</span>
		<h1 class="text-balance font-display text-5xl font-extrabold leading-[1.03] text-cream-50 sm:text-6xl">
			{title}
		</h1>
		{#if description}
			<p class="max-w-2xl text-balance text-lg leading-relaxed text-cream-200/80">
				{description}
			</p>
		{/if}
		{#if children}
			<div class="mt-3">{@render children()}</div>
		{/if}
	</div>
</section>
