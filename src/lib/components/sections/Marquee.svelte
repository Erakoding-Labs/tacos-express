<script lang="ts">
	const items = [
		'Fresh Tortillas Daily',
		'Slow-Cooked Barbacoa',
		'House-Made Salsa',
		'Big Portions',
		'Fast Drive-Through',
		'Family Owned',
		'Authentic Mexican Flavor',
		'Breakfast Tacos All Morning'
	];
</script>

<div class="overflow-hidden border-y border-white/10 brand-gradient py-4">
	<div class="flex w-max animate-marquee">
		{#each [0, 1] as dup}
			<ul class="flex items-center gap-8 px-4" aria-hidden={dup === 1 ? 'true' : undefined}>
				{#each items as item}
					<li class="flex items-center gap-8 whitespace-nowrap font-display text-base font-bold uppercase tracking-wide text-white sm:text-lg">
						{item}
						<span class="text-sunset-200">✦</span>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
