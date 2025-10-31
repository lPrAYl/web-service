import { Link } from 'react-router-dom'
import { Segment } from '../../components/Segment'
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
    <Segment title="All Persons">
      <div className={css.persons}>
        {data?.persons.map((person) => (
          <div className={css.person} key={person.nick}>
            <Segment
              size={2}
              title={
                <Link className={css.personLink} to={getViewPersonsRoute({ personNick: person.nick })}>
                  {person.name}
                </Link>
              }
              description={person.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  )
}
