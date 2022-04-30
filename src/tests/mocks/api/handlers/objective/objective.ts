import { rest } from "msw"
import { genObjective } from "@/tests/mocks/features"

export const objectiveHandlers = [
  rest.get("/objectives", (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json([genObjective(), genObjective(), genObjective()])
    )
  }),
]
