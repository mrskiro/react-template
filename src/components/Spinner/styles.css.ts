import { keyframes } from "@vanilla-extract/css"
import * as V from "@vanilla-extract/recipes"

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
})

export const recipe = V.recipe({
  base: {
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: "2px",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    animation: `${rotate} 0.45s linear infinite`,
  },
  variants: {
    size: {
      sm: {
        width: "16px",
        height: "16px",
      },
      md: {
        width: "24px",
        height: "24px",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type Variants = V.RecipeVariants<typeof recipe>
