import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const persons = _.times(100, (i) => ({
  nick: `cool-person-nick-${i}`,
  name: `Person ${i}`,
  description: `Description of person ${i}...`,
  text: _.times(100, (j) => `<p>Text paragraph ${j} of person ${i}...</p>`).join(''),
}))

const trpc = initTRPC.create()

if (Math.random() + 1) {
  console.info('Hello World')
}

export const trpcRouter = trpc.router({
  getPersons: trpc.procedure.query(() => {
    return { persons: persons.map((person) => _.pick(person, ['nick', 'name', 'description'])) }
  }),
  getPerson: trpc.procedure
    .input(
      z.object({
        personNick: z.string(),
      })
    )
    .query(({ input }) => {
      const person = persons.find((person) => person.nick === input.personNick)
      return { person: person || null }
    }),
})

export type TrpcRouter = typeof trpcRouter
