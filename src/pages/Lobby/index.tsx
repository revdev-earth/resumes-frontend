import { LayoutPages } from "@components/principal"
import Link from "next/link"

const templates = []

const ResumeDisable = () => (
  <div className="w-[200px] h-[300px] bg-emerald-300">Resumen actual</div>
)

const ResumeAvailable = () => (
  <Link href="/">
    <div className="w-[200px] h-[300px] bg-emerald-300 cursor-pointer">
      Resumen actual
    </div>
  </Link>
)

export const Lobby = () => {
  return (
    <LayoutPages>
      <div className="p-12">
        <div>Lobby</div>
        <div className="flex gap-[50px]">
          {templates.length > 0 ? <ResumeAvailable /> : <ResumeDisable />}
          <Link href="/templates">
            <div className="w-[300px] h-[300px] bg-emerald-300 cursor-pointer ">
              Templates
            </div>
          </Link>
        </div>
      </div>
    </LayoutPages>
  )
}
