import { rest } from "msw"

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true")
    return res(
      ctx.status(200),
      ctx.json({
        name: "purple",
      })
    )
  }),
  rest.get("/me", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated")
    if (!isAuthenticated) {
      return res(
        ctx.status(401),
        ctx.json({
          errorMessage: "Not authorized",
        })
      )
    }
    return res(
      ctx.status(200),
      ctx.json({
        name: "purple",
      })
    )
  }),
]
