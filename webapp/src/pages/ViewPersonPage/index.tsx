import { useParams } from 'react-router-dom'

export const ViewPersonPage = () => {
  const { personNick } = useParams() as { personNick: string }
  return (
    <div>
      <h1>{personNick}</h1>
      <p>Description of person 1...</p>
      <div>
        <p>Text paragraph 1 of person 1...</p>
        <p>Text paragraph 2 of person 1...</p>
        <p>Text paragraph 3 of person 1...</p>
      </div>
    </div>
  )
}
