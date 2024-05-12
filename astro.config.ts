import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"
import qwikdev from "@qwikdev/astro"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import partytown from "@astrojs/partytown"
import { defineConfig, passthroughImageService } from "astro/config"
import Icons from "unplugin-icons/vite"
import rehypeExternalLinks from "rehype-external-links"
import { rlc } from "@totto/lib/remark-link-card"

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [sitemap(), qwikdev({}), mdx(), tailwind(), partytown()],
  markdown: {
    // @ts-expect-error 型定義修正後このコメントを削除すること
    remarkPlugins: [rlc],
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ["nofererrer"], target: "_blank" }],
    ],
  },
  site: "https://lapriere.totto2727.dev",
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [
      Icons({
        compiler: "jsx",
        jsx: "qwik",
      }),
      Icons({
        compiler: "astro",
      }),
    ],
    esbuild: {
      legalComments: "none",
      banner: "/*! For licenses information, see /LICENSES.txt */",
    },
  },
})
