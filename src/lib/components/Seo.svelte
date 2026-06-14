<script lang="ts">
	import { buildSeo, type SeoInput } from '$lib/seo';
	import { business } from '$lib/data/business';

	type Props = SeoInput & { jsonLd?: unknown[] };
	let { jsonLd = [], ...rest }: Props = $props();

	const seo = $derived(buildSeo(rest));
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.url} />

	<!-- Open Graph -->
	<meta property="og:type" content={seo.type} />
	<meta property="og:site_name" content={business.name} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />

	<!-- Local / geo -->
	<meta name="geo.region" content="US-TX" />
	<meta name="geo.placename" content={business.address.city} />

	{#each jsonLd as schema}
		{@html `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>`}
	{/each}
</svelte:head>
