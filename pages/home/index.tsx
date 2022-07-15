import { Header } from "@components"

const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Section 1 */}
        <section className="flex flex-col items-center text-center w-full p-8 pb-0 bg-[#0077B6] text-white">
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

          {/* Template */}
          <div className="flex flex-col justify-center items-center p-14 mt-12 bg-[#CAF0F8] w-[600px] rounded">
            <div className="flex items-center mb-6 gap-5">
              <div className="flex w-[170px] justify-end">
                <div className="bg-[#0077B6] h-20 w-20  rounded"></div>
              </div>

              <div className="flex flex-col w-[250px] gap-3">
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col w-[170px] gap-3">
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
              </div>

              <div className="flex flex-col gap-3 w-[250px]">
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
                <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default Home
