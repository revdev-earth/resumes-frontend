export const Section3 = () => (
  <section
    className=" 
      flex flex-col items-center 
      text-center text-white
      w-full p-10 md:p-16 lg:p-28 bg-[#0077B6] 
    "
  >
    {/* 
        Card */}
    <div
      className=" 
        flex flex-col md:flex-row 
        justify-center items-center gap-6 md:gap-9 lg:gap-[100px] 
        lg:h-[300px] lg:w-[900px] 
        px-7 py-9 lg:px-[75px] lg:py-[50px]
        bg-[#90E0EF] rounded-xl transition 
        shadow-md hover:shadow-xl cursor-pointer "
    >
      {/* 
          perfil */}
      <div>
        <div
          className=" grow-0 w-24 h-24 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px] bg-[#CAF0F8] rounded-full "
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
          I&rsquo;ve been looking for something simple and quick for a long
          time. <br /> In a simple link, everyone saw my profile.
        </div>
      </div>
    </div>
  </section>
)
