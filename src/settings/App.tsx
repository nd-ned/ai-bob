import { createContext } from 'preact'
import MainRouter from './MainRouter'
import { useEffect, useMemo, useState } from 'preact/hooks'
import Splash from './tabs/Splash'

interface AppContextValues {
  loadingUI: boolean
  setLoadingUI: (loading: boolean) => void
  count: number
  setCount: (count: number) => void
}

const initCtx: AppContextValues = {
  loadingUI: true,
  setLoadingUI: () => {},
  count: 0,
  setCount: () => {},
}

export const AppContext = createContext<AppContextValues>(initCtx)

const App = () => {
  const [loadingUI, setLoadingUI] = useState(initCtx.loadingUI)
  const [count, setCount] = useState(initCtx.count)

  const globalCtxVal = useMemo(() => {
    return {
      count,
      setCount: (num: number) => setCount(num),
      loadingUI,
      setLoadingUI: (loading: boolean) => setLoadingUI(loading),
    }
  }, [count, loadingUI])

  useEffect(() => {
    // TODO: load state from local storage

    setTimeout(() => {
      console.log('loading done')

      setLoadingUI(false)
    }, 400)
  }, [])

  console.log('count', count)
  console.log('loadingUI', loadingUI)

  if (loadingUI) {
    return <Splash />
  }

  return (
    <AppContext.Provider value={globalCtxVal}>
      <MainRouter />
    </AppContext.Provider>
  )
}

export default App
