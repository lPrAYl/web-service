import { initTRPC } from '@trpc/server'

const persons = [
  { nick: 'cool-person-nick-1', name: 'Person 1', description: 'Description of person 1...' },
  { nick: 'cool-person-nick-2', name: 'Person 2', description: 'Description of person 2...' },
  { nick: 'cool-person-nick-3', name: 'Person 3', description: 'Description of person 3...' },
  { nick: 'cool-person-nick-4', name: 'Person 4', description: 'Description of person 4...' },
  { nick: 'cool-person-nick-5', name: 'Person 5', description: 'Description of person 5...' },
]

const trpc = initTRPC.create()

if (Math.random() + 1) {
  console.info('Hello World')
}

export const trpcRouter = trpc.router({
  getPersons: trpc.procedure.query(() => {
    return { persons }
  }),
})

export type TrpcRouter = typeof trpcRouter
