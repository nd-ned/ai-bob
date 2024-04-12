import Sidebar from './components/Sidebar'

import { AppContext } from '../App'
import { useContext } from 'preact/hooks'

const Instructions = () => {
  const { count, setCount } = useContext(AppContext)

  return (
    <main className="main-container with-sidebar">
      <Sidebar />
      <section className="content p20">
        <h1>Instructions {count}</h1>
        <p>Instructions content</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </section>
    </main>
  )
}

export default Instructions
