<script lang="ts">
	import { page } from '$app/stores';
	import { business } from '$lib/data/business';
	import { cn } from '$lib/utils';
	import Button from '$lib/components/ui/Button.svelte';
	import Phone from '@lucide/svelte/icons/phone';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/menu', label: 'Menu' },
		{ href: '/about', label: 'About' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/contact', label: 'Contact' }
	];

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const current = $derived($page.url.pathname);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	$effect(() => {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
	});
</script>

<svelte:window on:scroll={onScroll} />

<header
	class={cn(
		'fixed inset-x-0 top-0 z-50 transition-all duration-300',
		scrolled || mobileOpen
			? 'border-b border-charcoal-900/5 bg-cream-50/85 shadow-sm backdrop-blur-xl'
			: 'bg-transparent'
	)}
>
	<nav class="container-px flex h-18 items-center justify-between py-3" aria-label="Main">
		<!-- Brand -->
		<a href="/" class="group flex items-center gap-2.5" onclick={() => (mobileOpen = false)}>
			<span
				class="grid h-10 w-10 place-items-center rounded-xl brand-gradient font-display text-lg font-extrabold text-white shadow-md shadow-chili-600/30 transition-transform group-hover:-rotate-6"
			>
				TE
			</span>
			<span class="flex flex-col leading-none">
				<span class="font-display text-lg font-extrabold tracking-tight text-charcoal-900">
					Taco Express
				</span>
				<span class="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-chili-600">
					Menard, Texas
				</span>
			</span>
		</a>

		<!-- Desktop links -->
		<ul class="hidden items-center gap-1 lg:flex">
			{#each links as link}
				<li>
					<a
						href={link.href}
						aria-current={current === link.href ? 'page' : undefined}
						class={cn(
							'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
							current === link.href
								? 'text-chili-700'
								: 'text-charcoal-800/80 hover:text-chili-700'
						)}
					>
						{link.label}
						{#if current === link.href}
							<span class="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-chili-600"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Desktop CTA -->
		<div class="hidden items-center gap-3 lg:flex">
			<a
				href={business.phoneHref}
				class="flex items-center gap-2 text-sm font-semibold text-charcoal-800 transition-colors hover:text-chili-700"
			>
				<Phone size={16} class="text-chili-600" />
				{business.phone}
			</a>
			<Button href="/menu" size="sm">View Menu</Button>
		</div>

		<!-- Mobile toggle -->
		<button
			class="grid h-11 w-11 place-items-center rounded-xl border border-charcoal-900/10 bg-white/70 text-charcoal-900 lg:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}<X size={22} />{:else}<Menu size={22} />{/if}
		</button>
	</nav>

	<!-- Mobile drawer -->
	{#if mobileOpen}
		<div class="border-t border-charcoal-900/5 bg-cream-50 lg:hidden">
			<ul class="container-px flex flex-col gap-1 py-4">
				{#each links as link}
					<li>
						<a
							href={link.href}
							onclick={() => (mobileOpen = false)}
							aria-current={current === link.href ? 'page' : undefined}
							class={cn(
								'block rounded-xl px-4 py-3 text-base font-semibold transition-colors',
								current === link.href
									? 'bg-chili-600/10 text-chili-700'
									: 'text-charcoal-800 hover:bg-charcoal-900/5'
							)}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="mt-2 flex flex-col gap-2.5 px-1">
					<Button href={business.phoneHref} variant="outline" size="md" class="w-full">
						<Phone size={16} /> Call {business.phone}
					</Button>
					<Button href="/menu" size="md" class="w-full" onclick={() => (mobileOpen = false)}>
						View Full Menu
					</Button>
				</li>
			</ul>
		</div>
	{/if}
</header>
