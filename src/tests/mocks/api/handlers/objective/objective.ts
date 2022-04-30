import { genObjective } from "@/tests/mocks/features"
import { rest } from "msw"

export const objectiveHandlers = [
  rest.get("/objectives", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json([genObjective(), genObjective(), genObjective()])
    )
  }),
]
