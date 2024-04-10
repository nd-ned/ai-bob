import { Link } from 'preact-router'

import { ROUTES } from '../../../MainRouter'
import SidebarHeader from './Header'

const Sidebar = () => {
  return (
    <div>
      <SidebarHeader />

      <nav>
        <Link href={ROUTES.HOME}>Home</Link>
        <Link href={ROUTES.THREAD}>Thread</Link>
        <Link href={ROUTES.INSTRUCTIONS}>Instructions</Link>
      </nav>
    </div>
  )
}

export default Sidebar
