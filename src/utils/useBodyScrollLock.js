// useBodyScrollLock.js
import { useEffect } from "react"

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    const body = document.body
    if (isLocked) {
      const y = window.scrollY
      body.dataset.scrollY = String(y)
      body.style.position = "fixed"
      body.style.top = `-${y}px`
      body.style.left = "0"
      body.style.right = "0"
      body.style.width = "100%"
      body.style.overflow = "hidden"     // extra belt
      body.style.touchAction = "none"    // helps on iOS
    } else {
      // restore
      const y = parseInt(body.dataset.scrollY || "0", 10)
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      body.style.overflow = ""
      body.style.touchAction = ""
      delete body.dataset.scrollY
      window.scrollTo(0, y)
    }

    // safety: restore if component unmounts while locked
    return () => {
      const y = parseInt(body.dataset.scrollY || "0", 10)
      body.removeAttribute("style")
      if (!Number.isNaN(y)) window.scrollTo(0, y)
      delete body.dataset.scrollY
    }
  }, [isLocked])
}
