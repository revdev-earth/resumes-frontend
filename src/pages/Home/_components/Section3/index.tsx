export const Section3 = () => (
  <section
    className=" 
      flex flex-col items-center 
      text-center text-white
      w-full p-10 md:p-28 bg-[#0077B6] 
    "
  >
    {/* 
        Card */}
    <div
      className=" 
        flex flex-col md:flex-row 
        justify-center items-center gap-6 md:gap-[100px] 
        md:h-[300px] md:w-[900px] 
        px-7 py-9 md:px-[75px] md:py-[50px]
        bg-[#90E0EF] rounded-xl transition 
        shadow-md hover:shadow-xl cursor-pointer "
    >
      {/* 
          perfil */}
      <div>
        <div
          className=" grow-0 w-24 h-24 md:w-[150px] md:h-[150px] bg-[#CAF0F8] rounded-full "
          style={{
            boxShadow:
              "inset 0px 2px 4px rgba(0, 0, 0, 0.25), inset 0px -2px 4px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>

      {/* 
          message */}
      <div className=" flex flex-col gap-[14px] h-min ">
        {/* 
          name */}
        <div className="text-[35px] leading-[52.5px] text-[#0077B6] font-bold">
          Adam Smith
        </div>

        {/* 
          content */}
        <div className="text-[28px] leading-[44.8px] text-[#0077B6]">
          Simple and quick, just what I wanted for a long time. My friends and
          family all saw my updated profile, in a simple link.
        </div>
      </div>
    </div>
  </section>
)
