// import cloudflare from "@astrojs/cloudflare"
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import qwikdev from '@qwikdev/astro'
import { rlc } from '@totto/lib/remark-link-card'
import { defineConfig, passthroughImageService } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  output: 'static',
  // output: "hybrid",
  // adapter: cloudflare(),
  integrations: [sitemap(), qwikdev({}), mdx(), tailwind(), partytown()],
  markdown: {
    // @ts-expect-error 型定義修正後このコメントを削除すること
    remarkPlugins: [rlc],
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['noreferrer'], target: '_blank' }],
    ],
  },
  site: 'https://lapriere.totto2727.dev',
  image: {
    service: passthroughImageService(),
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents'],
    },
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'qwik',
      }),
      Icons({
        compiler: 'astro',
      }),
    ],
    esbuild: {
      legalComments: 'none',
      banner: '/*! For licenses information, see /LICENSES.txt */',
    },
  },
})
