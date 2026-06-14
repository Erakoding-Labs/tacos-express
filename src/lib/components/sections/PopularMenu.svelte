<script lang="ts">
	import { popularItems } from '$lib/data/menu';
	import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
	import MenuItemCard from '$lib/components/MenuItemCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<section class="bg-white py-20 lg:py-28">
	<div class="container-px flex flex-col gap-14">
		<div class="flex flex-col items-end justify-between gap-6 sm:flex-row">
			<SectionHeading
				align="left"
				eyebrow="Fan Favorites"
				title="The most popular tacos in town"
				description="Locals can't get enough of these — start here if it's your first visit."
				class="max-w-2xl"
			/>
			<div use:reveal class="hidden sm:block">
				<Button href="/menu" variant="outline" size="md">
					Full Menu <ArrowRight size={18} />
				</Button>
			</div>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each popularItems as item, i}
				<MenuItemCard {item} delay={i * 90} />
			{/each}
		</div>

		<div use:reveal class="flex justify-center sm:hidden">
			<Button href="/menu" variant="outline" size="md" class="w-full">
				See the Full Menu <ArrowRight size={18} />
			</Button>
		</div>
	</div>
</section>
