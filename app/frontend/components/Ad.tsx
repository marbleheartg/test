"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"

const Ad = () => {
  const [v, setV] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    ;(async function () {
      await new Promise(res => setTimeout(res, 3000))
      setV(true)
    })()
  }, [])

  return (
    <div
      {...useSwipeable({
        onSwipedDown: () => {
          setIsClosing(true)
          setTimeout(() => {
            setV(false)
            setIsClosing(false)
          }, 1000)
        },
        trackMouse: true,
      })}
      className={clsx(
        "fixed bottom-0 left-0 w-full h-1/2 z-100",
        "flex flex-col justify-center items-center gap-5",
        "p-6 pt-0 rounded-t-4xl",
        "bg-white/30 border border-white/50",
        "backdrop-blur-xl backdrop-saturate-150",
        "text-sm",
        "glass-shine",
        "overflow-hidden",
        v ? "" : "hidden",
        isClosing ? "animate-slide-down" : "animate-slide-up",
      )}
    >
      <div className="w-12 h-1 bg-white rounded-full mb-4"></div>
      {/* <img className="max-w-full max-h-1/2" src="https://placehold.co/600x400" alt="ad-image" /> */}
      <img className="max-w-full max-h-1/2" src="https://monad-flowers.xyz/images/og/hero.jpg" alt="ad-image" />

      <div>try this awesome mini app</div>
      <a
        href="https://farcaster.xyz/marbleheart"
        // target="_blank"
        className={clsx("px-3 py-1 border rounded-xl", "cursor-pointer", "z-10")}
        onClick={() => setV(false)}
      >
        open
      </a>
    </div>
  )
}

export default Ad
