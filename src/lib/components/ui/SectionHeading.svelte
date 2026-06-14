<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { cn } from '$lib/utils';

	let {
		eyebrow,
		title,
		description,
		align = 'center',
		dark = false,
		class: className
	}: {
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'center' | 'left';
		dark?: boolean;
		class?: string;
	} = $props();
</script>

<div
	use:reveal
	class={cn(
		'flex flex-col gap-4',
		align === 'center' ? 'items-center text-center' : 'items-start text-left',
		className
	)}
>
	{#if eyebrow}
		<span
			class={cn(
				'inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]',
				dark ? 'text-sunset-300' : 'text-chili-600'
			)}
		>
			<span class="h-px w-6 bg-current opacity-60"></span>
			{eyebrow}
		</span>
	{/if}
	<h2
		class={cn(
			'text-balance text-3xl sm:text-4xl lg:text-5xl',
			dark ? 'text-cream-50' : 'text-charcoal-900'
		)}
	>
		{title}
	</h2>
	{#if description}
		<p
			class={cn(
				'max-w-2xl text-balance text-base leading-relaxed sm:text-lg',
				dark ? 'text-cream-200/80' : 'text-charcoal-700/80'
			)}
		>
			{description}
		</p>
	{/if}
</div>
