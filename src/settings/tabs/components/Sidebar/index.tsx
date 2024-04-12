import { Link } from 'preact-router'

import { ROUTES } from '../../../MainRouter'
import SidebarHeader from './Header'
import { createHashHistory } from 'history'

const Sidebar = () => {
  const history = createHashHistory()

  const isActive = (route: string) => {
    return history.location.pathname === route ? 'active' : ''
  }

  return (
    <div>
      <SidebarHeader />

      <nav>
        <Link href={ROUTES.HOME} className={isActive(ROUTES.HOME)}>
          Home
        </Link>
        <Link href={ROUTES.THREAD} className={isActive(ROUTES.THREAD)}>
          Thread
        </Link>
        <Link href={ROUTES.INSTRUCTIONS} className={isActive(ROUTES.INSTRUCTIONS)}>
          Instructions
        </Link>
        <Link href={ROUTES.SETTINGS} className={isActive(ROUTES.SETTINGS)}>
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar
