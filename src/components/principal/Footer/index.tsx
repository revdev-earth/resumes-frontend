const footer_items = [
  {
    id: "1",
    title: "Resumes",
    items: ["Who are we?", "What do we do?", "Our company"],
  },
  {
    id: "2",
    title: "Community",
    items: ["Carrier", "Participate", "Information", "Blog"],
  },
  {
    id: "3",
    title: "Contact Us",
    items: ["email"],
  },
]

export const Space = ({ title, items }) => (
  <>
    {/* 
          message */}
    <div className=" flex flex-col gap-[14px] h-min ">
      {/* 
            name */}
      <div className="text-[35px] leading-[52.5px] text-[#0077B6] font-bold">
        {title}
      </div>

      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="text-[28px] leading-[44.8px] text-[#0077B6]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </>
)

export const Footer = () => (
  <footer
    className="
      text-white p-14

      min-h-[400px] w-full
      bg-[#CAF0F8]
      animate-fade-in
    "
  >
    <div
      className="
        flex flex-col md:flex-row
        gap-8
        justify-between lg:w-[850px] 
        m-auto 
      "
    >
      {footer_items.map((item) => (
        <Space key={item.id} {...item} />
      ))}
    </div>
  </footer>
)
