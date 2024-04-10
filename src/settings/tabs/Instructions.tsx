import Sidebar from './components/Sidebar'

const Instructions = () => {
  return (
    <main className="main-container with-sidebar">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="content">
        <h1>Instructions</h1>
        <p>Instructions content</p>
      </section>
    </main>
  )
}

export default Instructions
