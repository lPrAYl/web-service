import { useParams } from 'react-router-dom'
import { Segment } from '../../components/Segment'
import { ViewPersonRouteParams } from '../../lib/routes.ts'
import { trpc } from '../../lib/trpc.tsx'
import css from './index.module.scss'

export const ViewPersonPage = () => {
  const { personNick } = useParams() as ViewPersonRouteParams
  const { data, error, isLoading, isFetching, isError } = trpc.getPerson.useQuery({ personNick })
  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data?.person) {
    return <span>Person not found</span>
  }

  return (
    <Segment title={data.person.name} description={data.person.description}>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.person.text }} />
    </Segment>
  )
}
