<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Marquee from '$lib/components/sections/Marquee.svelte';
	import Features from '$lib/components/sections/Features.svelte';
	import PopularMenu from '$lib/components/sections/PopularMenu.svelte';
	import ReviewsPreview from '$lib/components/sections/ReviewsPreview.svelte';
	import LocationHours from '$lib/components/sections/LocationHours.svelte';
	import CtaBanner from '$lib/components/sections/CtaBanner.svelte';
	import { breadcrumbSchema } from '$lib/seo';
</script>

<Seo
	title=""
	description="Taco Express in Menard, TX serves the best fresh breakfast tacos, burritos and barbacoa. Family-owned, big portions, fast drive-through. Rated 4.1★."
	path="/"
	jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }])]}
/>

<Hero />
<Marquee />
<Features />
<PopularMenu />
<ReviewsPreview />
<LocationHours />
<CtaBanner />
