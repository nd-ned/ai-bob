import { useContext, useState } from 'preact/hooks'

import Sidebar from './components/Sidebar'
import { AppContext } from '../App'

const Settings = () => {
  const { OPENAI_API_KEY } = useContext(AppContext)

  const [key, setKey] = useState(OPENAI_API_KEY)

  // TODO: Implement save API key

  const renderWelcome = () => {
    return (
      <div>
        <p>
          Welcome to the OpenAI Playground! To get started, you'll need to enter your OpenAI API key
          in the settings. If you don't have one, you can sign up for a free account at{' '}
          <a href="https://platform.openai.com/signup" target="_blank">
            https://platform.openai.com/signup
          </a>
          .
        </p>
        <div className="flex-between">
          <input
            class="input mr-1"
            type="text"
            value={OPENAI_API_KEY}
            placeholder="Enter your API key"
          />

          <button class="primary-btn">Save</button>
        </div>
      </div>
    )
  }

  const renderSettings = () => {
    return <div>Settings content Logout</div>
  }

  return (
    <main className="main-container with-sidebar">
      <section className="sidebar">
        <Sidebar />
      </section>

      <section className="content">
        <div className="content-wrapper">
          <h1>Settings</h1>

          {OPENAI_API_KEY ? renderSettings() : renderWelcome()}
        </div>
      </section>
    </main>
  )
}

export default Settings
