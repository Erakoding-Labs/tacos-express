<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chili-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				primary:
					'bg-chili-600 text-white shadow-lg shadow-chili-600/25 hover:bg-chili-700 hover:shadow-xl hover:shadow-chili-600/30 hover:-translate-y-0.5',
				accent:
					'brand-gradient text-white shadow-lg shadow-sunset-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sunset-500/30',
				outline:
					'border-2 border-charcoal-900/15 bg-white/70 text-charcoal-900 backdrop-blur hover:border-chili-600 hover:text-chili-700',
				ghost: 'text-charcoal-900 hover:bg-charcoal-900/5',
				light:
					'bg-white text-chili-700 shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:shadow-xl'
			},
			size: {
				sm: 'h-10 px-5 text-sm',
				md: 'h-12 px-7 text-[0.95rem]',
				lg: 'h-14 px-9 text-base'
			}
		},
		defaultVariants: { variant: 'primary', size: 'md' }
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	type Props = {
		variant?: ButtonVariant;
		size?: ButtonSize;
		href?: string;
		class?: string;
		children: Snippet;
	} & HTMLButtonAttributes &
		HTMLAnchorAttributes;

	let {
		variant = 'primary',
		size = 'md',
		href,
		class: className,
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a {href} class={cn(buttonVariants({ variant, size }), className)} {...rest}>
		{@render children()}
	</a>
{:else}
	<button class={cn(buttonVariants({ variant, size }), className)} {...rest}>
		{@render children()}
	</button>
{/if}
