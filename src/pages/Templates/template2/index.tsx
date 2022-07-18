import { LayoutPages } from "@components/principal"

export const Template2 = () => {
  return (
    <LayoutPages>
      <div
        className="
          h-[500px]
          lg:w-[800px]
          md:w-[600px]
          m-auto
          rounded
          bg-slate-50
        "
        style={{
          boxShadow:
            "rgba(107, 223, 220, 0.07) 0px 1px 2px, rgba(107, 223, 220, 0.07) 0px 2px 4px, rgba(107, 223, 220, 0.07) 0px 4px 8px, rgba(107, 223, 220, 0.07) 0px 8px 16px, rgba(107, 223, 220, 0.07) 0px 16px 32px, rgba(107, 223, 220, 0.07) 0px 32px 64px",
        }}
      >
        <div>
          <header></header>
          <main>
            <section>
              {/* Who I am */}

              {/* Experiences */}

              {/* Education */}
            </section>
            <aside>
              {/* projects */}

              {/* skills */}

              {/* social */}
            </aside>
          </main>
        </div>
      </div>
    </LayoutPages>
  )
}
