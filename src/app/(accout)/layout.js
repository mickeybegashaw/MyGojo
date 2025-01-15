import Image from "next/image"
const layout = ({children}) => {
  return (
    <div className="bg-slate-200 min-h-screen">
      {children}
    </div>
  )
}

export default layout
