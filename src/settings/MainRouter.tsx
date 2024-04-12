import { Router, Route } from 'preact-router'
import { createHashHistory } from 'history'
import { useContext } from 'preact/hooks'

import { AppContext } from './App'
import Home from './tabs/Home'
import Instructions from './tabs/Instructions'
import Thread from './tabs/Thread'
import Settings from './tabs/Settings'
import Assistants from './tabs/Assistants'

export const ROUTES = {
  HOME: '/',
  ASSISTANTS: '/assistants',
  INSTRUCTIONS: '/instructions',
  SETTINGS: '/settings',
  THREAD: '/thread',
}

const MainRouter = () => {
  const history = createHashHistory()
  const { OPENAI_API_KEY } = useContext(AppContext)

  if (!OPENAI_API_KEY) {
    history.replace(ROUTES.SETTINGS)
  }

  return (
    // @ts-ignore.
    <Router history={createHashHistory()}>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ASSISTANTS} component={Assistants} />
      <Route path={ROUTES.THREAD} component={Thread} />
      <Route path={ROUTES.INSTRUCTIONS} component={Instructions} />
      <Route path={ROUTES.SETTINGS} component={Settings} />
    </Router>
  )
}

export default MainRouter
