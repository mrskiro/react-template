import { Objective } from "@/features/objective"
import { faker } from "@faker-js/faker"

export const genObjective = (partial?: Partial<Objective>): Objective => ({
  id: faker.datatype.uuid(),
  title: faker.vehicle.color(),
  achievementRate: faker.datatype.number({ min: 0, max: 100 }),
  createdAt: faker.date.recent().toString(),
  ...partial,
})
