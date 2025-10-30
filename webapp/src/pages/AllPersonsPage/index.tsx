import { Link } from 'react-router-dom'
import { getViewPersonsRoute } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'
import css from './index.module.scss'

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
      <h1 className={css.title}>All Persons</h1>
      <div className={css.persons}>
        {data?.persons.map((person) => (
          <div className={css.person} key={person.nick}>
            <h2 className={css.personName}>
              <Link className={css.personLink} to={getViewPersonsRoute({ personNick: person.nick })}>
                {person.name}
              </Link>
            </h2>
            <p className={css.personDescription}>{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
