import OpenAI from 'openai'
import { useContext, useState } from 'preact/hooks'

import Sidebar from './components/Sidebar'
import { AppContext } from '../App'
import LoadIndicator from './components/LoadIndicator'
import LoadingButton from './components/LoadingButton'

const Settings = () => {
  const { OPENAI_API_KEY, setOPENAI_API_KEY, logout } = useContext(AppContext)

  const [key, setKey] = useState(OPENAI_API_KEY)
  const [errMsg, setErrMsg] = useState('')

  const handleKey = async () => {
    const openai = new OpenAI({
      apiKey: key,
      dangerouslyAllowBrowser: true,
    })

    try {
      await openai.get('/models')

      setErrMsg('')
      setKey('')
      setOPENAI_API_KEY(key)
    } catch (error) {
      console.error('Invalid API key', error)

      setErrMsg('Invalid API key')
    }
  }

  const renderWelcome = () => {
    return (
      <div>
        <p>
          Hello my name Bob, your customizable AI assistant. To get started, you'll need to enter
          your OpenAI API key in the settings. If you don't have one, you can sign up for a free
          account at{' '}
          <a href="https://platform.openai.com/signup" target="_blank">
            https://platform.openai.com/signup
          </a>
          .
        </p>
        <div className="flex-between">
          <input
            className="input mr10"
            type="text"
            value={key}
            onChange={(e) => {
              const { value } = e.target as HTMLInputElement

              setKey(value)
            }}
            placeholder="Enter your API key, e.g. 'sk-1234567890abcdef1234567890abcdef'"
          />
          <LoadingButton title="Save" onclick={handleKey} />
        </div>
        {errMsg && <p className="error">{errMsg}</p>}
      </div>
    )
  }

  const renderSettings = () => {
    return (
      <div>
        <p>
          Your OpenAI API key is set! You can now start using the Playground to interact with the
          OpenAI API.
        </p>
        <button className="primary-btn" onClick={logout}>
          Logout
        </button>
      </div>
    )
  }

  return (
    <main className="main-container with-sidebar">
      <Sidebar />

      <section className="content p20">
        <h1>Settings</h1>

        {OPENAI_API_KEY ? renderSettings() : renderWelcome()}
      </section>
    </main>
  )
}

export default Settings
