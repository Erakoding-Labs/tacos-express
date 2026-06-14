import { business } from '$lib/data/business';

export const prerender = true;

const routes = ['', '/menu', '/about', '/reviews', '/gallery', '/contact'];

export function GET() {
	const urls = routes
		.map(
			(path) => `	<url>
		<loc>${business.url}${path}</loc>
		<changefreq>weekly</changefreq>
		<priority>${path === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
