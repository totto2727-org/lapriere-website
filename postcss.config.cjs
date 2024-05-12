/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const path = require("node:path")

// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    tailwindcss: {
      // eslint-disable-next-line no-undef
      config: path.join(__dirname, "tailwind.config.mjs"),
    },
    autoprefixer: {},
  },
}
