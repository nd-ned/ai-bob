import { AppContext } from '../App'
import Sidebar from './components/Sidebar'

import { useContext } from 'preact/hooks'

const Thread = () => {
  const { count, setCount } = useContext(AppContext)

  return (
    <main className="main-container with-sidebar">
      <Sidebar />
      <section className="content p20">
        <h1>Thread: "{count}"</h1>
        <p>Thread content</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </main>
  )
}

export default Thread
