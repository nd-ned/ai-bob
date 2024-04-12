import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <main className="main-container with-sidebar">
      <Sidebar />
      <section className="content p20">
        <h1>Home</h1>
        <p>Home content</p>
      </section>
    </main>
  )
}

export default Home
