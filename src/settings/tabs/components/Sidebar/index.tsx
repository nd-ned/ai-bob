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
    <section className="sidebar p20">
      <SidebarHeader />
      <nav>
        <Link href={ROUTES.HOME} className={isActive(ROUTES.HOME)}>
          Home
        </Link>
        <Link href={ROUTES.ASSISTANTS} className={isActive(ROUTES.ASSISTANTS)}>
          Assistants
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
    </section>
  )
}

export default Sidebar
