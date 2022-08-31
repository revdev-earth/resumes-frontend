import Link from "next/link"

export const Section1 = () => (
  <section className="flex flex-col items-center text-center w-full px-8 py-16 bg-nuestro-azul text-white">
    <div className="flex flex-col items-center gap-9 w-full md:max-w-[600px]">
      <div className="text-5xl font-bold">In a jiffy, show who you are</div>
      <div className="text-3xl md:max-w-[400px]">
        You can create your CV in just a few minutes and share it with potential
        employers
      </div>

      <Link href="lobby">
        <button
          className="
            h-16 px-5
            md:w-[500px] md:h-[100px] 
            rounded-lg bg-[#90E0EF] 
            shadow-xl hover:shadow-md 
            transition 
            text-2xl md:text-4xl 
            font-bold
          "
        >
          Get started
        </button>
      </Link>
    </div>

    {/* Template */}
    <div
      className="
        flex flex-col justify-center
        items-center px-6 py-8 mt-12
        gap-6
        bg-[#CAF0F8] w-10/12 
        md:w-[600px] rounded
      "
    >
      <div
        className="
          border-4 border-[#fed05c] 
          animate-gold-call bg-black 
          h-20 w-full rounded flex 
          items-center justify-center 
          font-medium
        "
      >
        business card
      </div>
      <div className="bg-nuestro-azul h-40 w-full rounded flex items-center justify-center font-medium">
        resumen
      </div>
    </div>

    {/* Este diseño me gusta mas  */}
    {/* Template */}
    {/* <div className="flex flex-col justify-center items-center p-14 mt-12 bg-[#CAF0F8] w-10/12 md:w-[600px] rounded">
      <div className="flex items-center mb-6 gap-5">
        <div className="flex md:w-[170px] justify-end">
          <div className="bg-[#0077B6] h-20 w-20  rounded"></div>
        </div>

        <div className="flex flex-col md:w-[250px] gap-3">
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col md:w-[170px] gap-3">
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
        </div>

        <div className="flex flex-col gap-3 md:w-[250px]">
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
          <div className="bg-[#C4C4C4] h-3 w-full rounded"></div>
        </div>
      </div>
    </div> */}
  </section>
)
