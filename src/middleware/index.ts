import { defineMiddleware, sequence } from "astro/middleware"
import clsx from "clsx"
import { HTMLRewriter } from "htmlrewriter"

const imageCacheMiddleware = defineMiddleware(async (_, next) => {
  const res = await next()

  if (
    res instanceof Response &&
    res.headers.get("content-type")?.startsWith("image")
  ) {
    // res.headers.set("cache-control", "public, max-age=31536000, immutable");
    res.headers.set("cache-control", "public, max-age=0, must-revalidate")
    return res
  }

  return res
})

const htmlRewriterMiddleware = defineMiddleware(async (_, next) => {
  const res = await next()

  if (
    res instanceof Response &&
    res.headers.get("content-type")?.startsWith("text/html")
  ) {
    const rewriter = new HTMLRewriter()

    rewriter.on("a.rlc-container", {
      element: (el) => {
        const original = el.getAttribute("class")
        el.setAttribute("class", clsx(original, "not-prose group"))
      },
    })
    return rewriter.transform(res)
  }

  return res
})

export const onRequest = sequence(imageCacheMiddleware, htmlRewriterMiddleware)
