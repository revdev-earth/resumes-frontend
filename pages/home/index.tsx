import { Header } from "@components"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Section 1 */}
        <section className="w-full h-16 bg-slate-400 rounded-full">
          <div>In a jiffy, show who you are</div>
          <div>
            You can create your CV in just a few minutes and share it with
            potential employers
          </div>
          <button>Get started</button>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
