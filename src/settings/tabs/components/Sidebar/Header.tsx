import { Link } from 'preact-router'

import Logo from '../../../../assets/settingsIcon.svg'
import StartNewThreadIcon from '../../../../assets/settingsIcon.svg'

import { ROUTES } from '../../../MainRouter'

const SidebarHeader = () => {
  return (
    <header className="sidebar-header">
      <img src={Logo} alt="Logo" />

      <Link href={ROUTES.THREAD}>
        <img src={StartNewThreadIcon} alt="Start new thread" />
      </Link>
    </header>
  )
}

export default SidebarHeader
