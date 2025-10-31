import { Link, Outlet } from 'react-router-dom'
import { getAllPersonsRoute, getNewPersonRoute } from '../../lib/routes.ts'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>PersonNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllPersonsRoute()}>
              All Persons
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getNewPersonRoute()}>
              Add Person
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
