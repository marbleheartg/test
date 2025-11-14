import clsx from "clsx"
import { useState } from "react"
import { useSwipeable } from "react-swipeable"

export default function Home() {
  const [vis, setVis] = useState(true)

  const handlers = useSwipeable({
    onSwipedRight: () => setVis(prev => !prev),
    trackMouse: true,
  })

  return (
    <>
      <main className={clsx("fixed top-50 bottom-8 inset-x-1/12", "text-center")}></main>
      <div
        {...handlers}
        className={clsx(
          "fixed top-1/3 right-5",
          "flex justify-center items-center",
          "p-3 rounded-3xl",
          "bg-(--accent) opacity-90 border border-white/50",
          "backdrop-blur-xl backdrop-saturate-150",
          "text-sm",
          "glass-shine",
          vis ? "" : "hidden",
        )}
      >
        flowers
      </div>
    </>
  )
}
