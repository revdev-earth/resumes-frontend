import { Header } from "@components"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Section 1 */}
        <section className="flex flex-col items-center text-center w-full p-8 bg-[#0077B6] text-white">
          <div className="flex flex-col items-center gap-9 max-w-[600px]">
            <div className="text-5xl font-bold">
              In a jiffy, show who you are
            </div>
            <div className="text-3xl max-w-[400px]">
              You can create your CV in just a few minutes and share it with
              potential employers
            </div>
            <button className="w-[500px] h-[100px] rounded-lg bg-[#90E0EF] shadow-xl hover:shadow-md transition text-4xl font-bold">
              Get started
            </button>
          </div>
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
