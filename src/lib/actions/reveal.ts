import type { Action } from 'svelte/action';

type RevealOptions = {
	delay?: number;
	threshold?: number;
	once?: boolean;
};

/**
 * Scroll-reveal action. Pairs with the `[data-reveal]` CSS in app.css.
 * Usage: <div use:reveal> or <div use:reveal={{ delay: 120 }}>
 * The variant (fade / scale / left / right) is set via the `data-reveal`
 * attribute on the element; this action only toggles `data-revealed`.
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const { delay = 0, threshold = 0.15, once = true } = options ?? {};

	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);
	if (!node.hasAttribute('data-reveal')) node.setAttribute('data-reveal', '');

	// Respect reduced motion — reveal immediately, no observer.
	const prefersReduced =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) {
		node.setAttribute('data-revealed', '');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-revealed', '');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.removeAttribute('data-revealed');
				}
			}
		},
		{ threshold, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
