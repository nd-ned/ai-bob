import { createContext } from 'preact'
import MainRouter from './MainRouter'
import { useEffect, useMemo, useState } from 'preact/hooks'
import Splash from './tabs/Splash'

interface AppContextValues {
  loadingUI: boolean
  setLoadingUI: (loading: boolean) => void
  count: number
  setCount: (count: number) => void
  OPENAI_API_KEY: string
  setOPENAI_API_KEY: (key: string) => void
}

const initCtx: AppContextValues = {
  loadingUI: true,
  setLoadingUI: () => {},
  count: 0,
  setCount: () => {},
  OPENAI_API_KEY: '',
  setOPENAI_API_KEY: () => {},
}

export const AppContext = createContext<AppContextValues>(initCtx)

const App = () => {
  const [loadingUI, setLoadingUI] = useState(initCtx.loadingUI)
  const [count, setCount] = useState(initCtx.count)
  const [OPENAI_API_KEY, setOPENAI_API_KEY] = useState('')

  const globalCtxVal = useMemo(() => {
    return {
      count,
      setCount: (num: number) => setCount(num),
      loadingUI,
      setLoadingUI: (loading: boolean) => setLoadingUI(loading),
      OPENAI_API_KEY,
      setOPENAI_API_KEY: (key: string) => setOPENAI_API_KEY(key),
    }
  }, [count, loadingUI])

  useEffect(() => {
    if (!loadingUI) {
      const appCtx = {
        count,
        OPENAI_API_KEY,
      }

      chrome.storage.sync.set({ appCtx })
    }
  }, [loadingUI, count, OPENAI_API_KEY])

  useEffect(() => {
    const startTime = Date.now()

    chrome.storage.sync.get('appCtx', (result) => {
      const { appCtx } = result

      if (appCtx) {
        setCount(appCtx.count)
        setOPENAI_API_KEY(appCtx.OPENAI_API_KEY)
      }

      const timeLeft = 400 - (Date.now() - startTime)

      setTimeout(() => {
        setLoadingUI(false)
      }, timeLeft)
    })
  }, [])

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
