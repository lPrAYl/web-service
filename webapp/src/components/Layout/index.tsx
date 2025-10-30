import { Link, Outlet } from 'react-router-dom'
import { getAllPersonsRoute } from '../../lib/routes.ts'

export const Layout = () => {
  return (
    <div>
      <p>
        <b>PersonNick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllPersonsRoute()}>All Persons</Link>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
