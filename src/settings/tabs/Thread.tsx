import { AppContext } from '../App'
import Sidebar from './components/Sidebar'

import { useContext, useEffect } from 'preact/hooks'

const Thread = () => {
  const a = useContext(AppContext)

  const { count, setCount } = a

  return (
    <main className="main-container with-sidebar">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="content">
        <h1>Thread: "{count}"</h1>
        <p>Thread content</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </main>
  )
}

export default Thread
