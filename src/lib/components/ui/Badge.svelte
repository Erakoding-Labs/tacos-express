<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const badgeVariants = tv({
		base: 'inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide uppercase',
		variants: {
			variant: {
				popular: 'bg-sunset-500 text-white shadow-sm shadow-sunset-500/40',
				veg: 'bg-cilantro-500/15 text-cilantro-600',
				spicy: 'bg-chili-600/12 text-chili-700',
				soft: 'bg-cream-200 text-charcoal-700',
				outline: 'border border-charcoal-900/15 text-charcoal-700'
			},
			size: {
				xs: 'px-2 py-0.5 text-[0.62rem]',
				sm: 'px-2.5 py-1 text-[0.68rem]'
			}
		},
		defaultVariants: { variant: 'soft', size: 'sm' }
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>['variant'];
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		variant = 'soft',
		size = 'sm',
		class: className,
		children
	}: {
		variant?: BadgeVariant;
		size?: 'xs' | 'sm';
		class?: string;
		children: Snippet;
	} = $props();
</script>

<span class={cn(badgeVariants({ variant, size }), className)}>
	{@render children()}
</span>
