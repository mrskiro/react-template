import { faker } from "@faker-js/faker"
import { Objective } from "@/features/objective"

export const genObjective = (partial?: Partial<Objective>): Objective => ({
  id: faker.datatype.uuid(),
  title: faker.vehicle.color(),
  achievementRate: faker.datatype.number({ min: 0, max: 100 }),
  createdAt: faker.date.recent().toString(),
  ...partial,
})
