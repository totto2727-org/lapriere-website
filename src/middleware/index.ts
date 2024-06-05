import { defineMiddleware, sequence } from 'astro/middleware'
import { HTMLRewriter } from 'htmlrewriter'

import { cx } from '@/feature/style'

const imageCacheMiddleware = defineMiddleware(async (_, next) => {
	const res = await next()

	if (
		res instanceof Response
		&& res.headers.get('content-type')?.startsWith('image')
	) {
		// もともとの設定
		// res.headers.set("cache-control", "public, max-age=31536000, immutable");
		res.headers.set('cache-control', 'public, max-age=0, must-revalidate')
		return res
	}

	return res
})

const htmlRewriterMiddleware = defineMiddleware(async (_, next) => {
	const res = await next()

	if (
		res instanceof Response
		&& res.headers.get('content-type')?.startsWith('text/html')
	) {
		const rewriter = new HTMLRewriter()

		// リンクカードのHTMLにクラスを追加する
		rewriter.on('a.rlc-container', {
			element: (el) => {
				const original = el.getAttribute('class')
				el.setAttribute('class', cx(original, 'not-prose group'))
			},
		})
		return rewriter.transform(res)
	}

	return res
})

export const onRequest = sequence(imageCacheMiddleware, htmlRewriterMiddleware)
