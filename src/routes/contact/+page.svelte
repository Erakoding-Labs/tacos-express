<script lang="ts">
	import { business, fullAddress } from '$lib/data/business';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import LocationHours from '$lib/components/sections/LocationHours.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { breadcrumbSchema } from '$lib/seo';
	import Phone from '@lucide/svelte/icons/phone';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import Facebook from '$lib/components/icons/Facebook.svelte';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import Send from '@lucide/svelte/icons/send';

	let form = $state({ name: '', email: '', phone: '', message: '' });
	let submitted = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		// Static site: open the user's mail client pre-filled, then confirm.
		const subject = encodeURIComponent(`Message from ${form.name || 'a customer'}`);
		const body = encodeURIComponent(
			`${form.message}\n\n— ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}`
		);
		window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
		submitted = true;
	}

	const inputClass =
		'w-full rounded-xl border border-charcoal-900/10 bg-cream-50 px-4 py-3 text-charcoal-900 placeholder:text-charcoal-700/40 transition-colors focus:border-chili-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-chili-500/20';
</script>

<Seo
	title="Contact"
	description="Get in touch with Taco Express in Menard, TX. Call +1 325-396-2251, find our hours, address at 708 Frisco Ave, and send us a message."
	path="/contact"
	jsonLd={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
/>

<PageHero
	eyebrow="Get In Touch"
	title="We'd love to hear from you"
	description="Questions, catering, or just craving tacos? Call us, stop by, or send a message — we'll get right back to you."
	image="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
/>

<section class="bg-cream-50 py-16 lg:py-24">
	<div class="container-px grid gap-10 lg:grid-cols-2 lg:gap-14">
		<!-- Quick contact cards -->
		<div use:reveal class="flex flex-col gap-5">
			<h2 class="font-display text-3xl font-extrabold text-charcoal-900">Reach us directly</h2>
			<p class="text-charcoal-700/80">
				The fastest way to reach Taco Express is a quick phone call — we answer during business
				hours.
			</p>

			<div class="flex flex-col gap-4">
				<a
					href={business.phoneHref}
					class="group flex items-center gap-4 rounded-2xl border border-charcoal-900/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div class="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-white"><Phone size={22} /></div>
					<div>
						<div class="text-xs font-semibold uppercase tracking-wide text-charcoal-700/50">Call us</div>
						<div class="font-display text-lg font-bold text-charcoal-900">{business.phone}</div>
					</div>
				</a>
				<a
					href={`mailto:${business.email}`}
					class="group flex items-center gap-4 rounded-2xl border border-charcoal-900/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div class="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-white"><Mail size={22} /></div>
					<div>
						<div class="text-xs font-semibold uppercase tracking-wide text-charcoal-700/50">Email</div>
						<div class="font-display text-lg font-bold text-charcoal-900">{business.email}</div>
					</div>
				</a>
				<a
					href={business.mapsLink}
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-4 rounded-2xl border border-charcoal-900/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
				>
					<div class="grid h-12 w-12 place-items-center rounded-xl brand-gradient text-white"><MapPin size={22} /></div>
					<div>
						<div class="text-xs font-semibold uppercase tracking-wide text-charcoal-700/50">Visit</div>
						<div class="font-display text-lg font-bold text-charcoal-900">{fullAddress}</div>
					</div>
				</a>
			</div>

			<div class="flex items-center gap-3 pt-2">
				<span class="text-sm font-semibold text-charcoal-700">Follow us</span>
				<a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-full bg-white text-chili-600 shadow-sm transition-colors hover:bg-chili-600 hover:text-white"><Instagram size={18} /></a>
				<a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-full bg-white text-chili-600 shadow-sm transition-colors hover:bg-chili-600 hover:text-white"><Facebook size={18} /></a>
			</div>
		</div>

		<!-- Form -->
		<div use:reveal={{ delay: 120 }} class="rounded-3xl border border-charcoal-900/5 bg-white p-7 shadow-lg sm:p-9">
			{#if submitted}
				<div class="flex flex-col items-center gap-4 py-12 text-center">
					<CheckCircle2 size={56} class="text-cilantro-500" />
					<h3 class="font-display text-2xl font-bold text-charcoal-900">Thank you!</h3>
					<p class="max-w-sm text-charcoal-700/75">
						Your message is on its way. We'll get back to you soon — or call us at
						<a href={business.phoneHref} class="font-semibold text-chili-700">{business.phone}</a>
						for a faster reply.
					</p>
					<Button onclick={() => (submitted = false)} variant="outline" size="md">
						Send another message
					</Button>
				</div>
			{:else}
				<h2 class="mb-6 font-display text-2xl font-extrabold text-charcoal-900">Send a message</h2>
				<form onsubmit={handleSubmit} class="flex flex-col gap-4">
					<div class="flex flex-col gap-1.5">
						<label for="name" class="text-sm font-semibold text-charcoal-800">Name</label>
						<input id="name" type="text" required bind:value={form.name} placeholder="Your name" class={inputClass} />
					</div>
					<div class="grid gap-4 sm:grid-cols-2">
						<div class="flex flex-col gap-1.5">
							<label for="email" class="text-sm font-semibold text-charcoal-800">Email</label>
							<input id="email" type="email" required bind:value={form.email} placeholder="you@email.com" class={inputClass} />
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="phone" class="text-sm font-semibold text-charcoal-800">Phone</label>
							<input id="phone" type="tel" bind:value={form.phone} placeholder="(325) 000-0000" class={inputClass} />
						</div>
					</div>
					<div class="flex flex-col gap-1.5">
						<label for="message" class="text-sm font-semibold text-charcoal-800">Message</label>
						<textarea id="message" required rows="5" bind:value={form.message} placeholder="How can we help?" class={`${inputClass} resize-none`}></textarea>
					</div>
					<Button type="submit" variant="primary" size="lg" class="mt-2 w-full">
						<Send size={18} /> Send Message
					</Button>
					<p class="text-center text-xs text-charcoal-700/55">
						Prefer to talk? Call us at
						<a href={business.phoneHref} class="font-semibold text-chili-700">{business.phone}</a>.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>

<LocationHours showHeading={true} />
