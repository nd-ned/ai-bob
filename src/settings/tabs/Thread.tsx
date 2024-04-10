import Sidebar from './components/Sidebar'

const Thread = () => {
  return (
    <main className="main-container with-sidebar">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="content">
        <h1>Thread</h1>
        <p>Thread content</p>
      </section>
    </main>
  )
}

export default Thread
