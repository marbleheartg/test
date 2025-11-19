import clsx from "clsx"
// import Image from "next/image"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { store } from "../../lib/store"

const Header = () => {
  const { user } = store()

  const { address, isConnected, caipAddress } = useAppKitAccount()
  const { open, close } = useAppKit()

  return (
    <header className={clsx("fixed top-10 inset-x-7", "flex justify-between items-center flex-col")}>
      <div className={clsx("text-xl p-1 px-2.5 pb-1.5 mb-0.5")}>
        <span>mini</span>
        <span className="pl-1.5">ads</span>
      </div>

      <button className={clsx("p-1 px-2.5 pb-1.5", "border rounded-full", "cursor-pointer")} onClick={() => open({ view: "Connect" })}>
        {isConnected ? address?.slice(0, 6) : "connect"}
      </button>

      <span>{caipAddress?.slice(0, 20)}</span>
    </header>
  )
}

export default Header
