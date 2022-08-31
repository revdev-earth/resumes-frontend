const styles_div = `
  border-4 border-solid border-[#cef]
  rounded-full
  absolute
  opacity-0
`

export const Loader = () => (
  <div className="w-[80px] h-[80px] flex relative self-center translate-y-[38vh]">
    <div className={`${styles_div} animate-lds-ripple`} />
    <div className={`${styles_div} animate-lds-ripple2`} />
    <div className={`${styles_div} animate-lds-ripple3`} />
    <div className={`${styles_div} animate-lds-ripple4`} />
  </div>
)
