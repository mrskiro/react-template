import { globalStyle } from "@vanilla-extract/css"

globalStyle("*:where(:not(iframe, canvas, img, video):not(svg *))", {
  all: "unset",
  display: "revert",
})

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
})

globalStyle("ol,ul", {
  listStyle: "none",
})
