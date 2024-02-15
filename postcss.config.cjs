/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("node:path")

module.exports = {
  plugins: {
    tailwindcss: {
      // eslint-disable-next-line no-undef
      config: path.join(__dirname, "tailwind.config.mjs"),
    },
    autoprefixer: {},
  },
}
