<script lang="ts">
	import { business } from '$lib/data/business';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import Phone from '@lucide/svelte/icons/phone';
	import UtensilsCrossed from '@lucide/svelte/icons/utensils-crossed';
</script>

<section class="bg-charcoal-950 py-20 lg:py-28">
	<div class="container-px">
		<div
			use:reveal={{ delay: 0 }}
			class="relative overflow-hidden rounded-[2.5rem] brand-gradient px-8 py-14 text-center shadow-2xl sm:px-16 sm:py-20"
		>
			<div class="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
			<div class="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-charcoal-950/20 blur-2xl"></div>

			<div class="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
				<UtensilsCrossed size={40} class="text-white/90" />
				<h2 class="text-balance font-display text-4xl font-extrabold text-white sm:text-5xl">
					Hungry yet? Come taste the difference.
				</h2>
				<p class="text-balance text-lg text-white/85">
					Fresh tacos, fast service, and the best salsa in Menard are waiting. Dine in or roll
					through the drive-through today.
				</p>
				<div class="flex flex-col gap-3 sm:flex-row">
					<Button href="/menu" variant="light" size="lg">View Our Menu</Button>
					<Button
						href={business.phoneHref}
						size="lg"
						class="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
					>
						<Phone size={18} /> Call {business.phone}
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>
