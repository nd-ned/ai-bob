import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <main className="main-container with-sidebar">
      <section className="sidebar">
        <Sidebar />
      </section>
      <section className="content">
        <h1>Home</h1>
        <p>Home content</p>
      </section>
    </main>
  )
}

export default Home
