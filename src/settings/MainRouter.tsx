import { Router, Route } from 'preact-router'
import { createHashHistory } from 'history'

import Home from './tabs/Home'
import Instructions from './tabs/Instructions'
import Thread from './tabs/Thread'

export const ROUTES = {
  HOME: '/',
  INSTRUCTIONS: '/instructions',
  SETTINGS: '/settings',
  THREAD: '/thread',
}

const MainRouter = () => {
  return (
    // @ts-ignore.
    <Router history={createHashHistory()}>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.THREAD} component={Thread} />
      <Route path={ROUTES.INSTRUCTIONS} component={Instructions} />
      <Route path={ROUTES.SETTINGS} component={Instructions} />
    </Router>
  )
}

export default MainRouter
