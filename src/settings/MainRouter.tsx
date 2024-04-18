import { Router, Route } from 'preact-router'
import { createHashHistory } from 'history'
import { useContext, useEffect, useState } from 'preact/hooks'

import { AppContext } from './App'
import Home from './tabs/Home'
import Instructions from './tabs/Instructions'
import Thread from './tabs/Thread'
import Settings from './tabs/Settings'
import Assistants from './tabs/Assistants'
import { parseQuery, stringifyQuery } from './utils'

export const ROUTES = {
  HOME: '/',
  ASSISTANTS: '/assistants',
  INSTRUCTIONS: '/instructions',
  SETTINGS: '/settings',
  THREAD: '/thread',
}

export const useHashHistory = () => {
  const defaultHistory = createHashHistory()

  const history = {
    ...defaultHistory,
    matches: parseQuery(defaultHistory.location.search),
    setMatches: (matches: Record<string, string>) => {
      history.push({
        search: stringifyQuery(matches),
      })
    },
  }

  const [state, setState] = useState(history)

  useEffect(() => {
    const unlisten = history.listen((historyUpt) => {
      if (!historyUpt.location.search) return

      setState({
        ...history,
        ...historyUpt,
        matches: parseQuery(historyUpt.location.search),
      })
    })

    return () => {
      unlisten()
    }
  }, [])

  return state
}

const MainRouter = () => {
  const { OPENAI_API_KEY } = useContext(AppContext)
  const history = useHashHistory()

  useEffect(() => {
    if (!OPENAI_API_KEY) {
      history.replace(ROUTES.SETTINGS)
    }
  }, [OPENAI_API_KEY])

  return (
    // @ts-ignore.
    <Router history={history}>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ASSISTANTS} component={Assistants} />
      <Route path={ROUTES.THREAD} component={Thread} />
      <Route path={ROUTES.INSTRUCTIONS} component={Instructions} />
      <Route path={ROUTES.SETTINGS} component={Settings} />
    </Router>
  )
}

export default MainRouter
