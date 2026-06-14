<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';
	import Home from '@lucide/svelte/icons/house';
</script>

<section class="grid min-h-[70vh] place-items-center bg-charcoal-950 px-6 py-32 text-center">
	<div class="flex max-w-lg flex-col items-center gap-6">
		<span class="font-display text-7xl font-extrabold text-gradient sm:text-8xl">
			{$page.status}
		</span>
		<h1 class="font-display text-3xl font-extrabold text-cream-50">
			{$page.status === 404 ? 'This page is off the menu' : 'Something went wrong'}
		</h1>
		<p class="text-cream-200/75">
			{$page.error?.message ?? 'Let’s get you back to the tacos.'}
		</p>
		<Button href="/" variant="accent" size="lg">
			<Home size={18} /> Back to Home
		</Button>
	</div>
</section>
