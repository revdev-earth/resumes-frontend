export const Section3 = () => (
  <section
    className=" 
      flex flex-col items-center 
      text-center text-white
      w-full p-28 bg-[#0077B6] "
  >
    {/* 
        Card */}
    <div
      className=" 
        flex justify-center items-center gap-[100px] 
        h-[300px] w-[900px] px-[75px] py-[50px]
        bg-[#90E0EF] rounded-xl transition 
        shadow-md hover:shadow-xl cursor-pointer "
    >
      {/* 
          perfil */}
      <div>
        <div
          className=" grow-0 w-[150px] h-[150px] bg-[#CAF0F8] rounded-full "
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
