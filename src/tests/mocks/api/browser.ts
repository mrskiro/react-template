import { setupWorker } from "msw"
import * as Handlers from "./handlers"

export const worker = setupWorker(...Handlers.authHandlers, ...Handlers.objectiveHandlers)
