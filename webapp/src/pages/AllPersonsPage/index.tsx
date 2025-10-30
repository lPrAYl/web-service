import { Link } from 'react-router-dom'
import { getViewPersonsRoute } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'

export const AllPersonsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPersons.useQuery()
  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All Persons</h1>
      {data?.persons.map((person) => {
        return (
          <div key={person.nick}>
            <h2>
              <Link to={getViewPersonsRoute({ personNick: person.nick })}>{person.name}</Link>
            </h2>
            <p>{person.description}</p>
          </div>
        )
      })}
    </div>
  )
}
