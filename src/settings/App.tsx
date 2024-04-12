import { createContext } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'
import OpenAI from 'openai'

import MainRouter from './MainRouter'
import Splash from './tabs/Splash'

interface AppContextValues {
  loadingUI: boolean
  setLoadingUI: (loading: boolean) => void
  count: number
  setCount: (count: number) => void
  OPENAI_API_KEY: string
  setOPENAI_API_KEY: (key: string) => void
  openai?: OpenAI
  logout: () => void
}

const initCtx: AppContextValues = {
  loadingUI: true,
  setLoadingUI: () => {},
  count: 0,
  setCount: () => {},
  OPENAI_API_KEY: '',
  setOPENAI_API_KEY: () => {},
  logout: () => {},
}

export const AppContext = createContext<AppContextValues>(initCtx)

const App = () => {
  const [loadingUI, setLoadingUI] = useState(initCtx.loadingUI)
  const [count, setCount] = useState(initCtx.count)
  const [OPENAI_API_KEY, setOPENAI_API_KEY] = useState('')
  const [openai, setOpenai] = useState<OpenAI | undefined>()

  const globalCtxVal = useMemo(() => {
    return {
      count,
      setCount: (num: number) => setCount(num),
      loadingUI,
      setLoadingUI: (loading: boolean) => setLoadingUI(loading),
      OPENAI_API_KEY,
      setOPENAI_API_KEY: (key: string) => setOPENAI_API_KEY(key),
      openai,
      logout: () => {
        setOPENAI_API_KEY('')
      },
    }
  }, [count, loadingUI, OPENAI_API_KEY, openai])

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

  useEffect(() => {
    if (OPENAI_API_KEY && !openai) {
      setOpenai(
        new OpenAI({
          apiKey: OPENAI_API_KEY,
          dangerouslyAllowBrowser: true,
        }),
      )
    }
  }, [OPENAI_API_KEY])

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
