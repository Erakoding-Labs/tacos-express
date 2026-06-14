<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { localBusinessSchema } from '$lib/seo';

	let { children } = $props();
	const schema = localBusinessSchema();
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
