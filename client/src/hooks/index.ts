import { useEffect, useState } from 'react'

export const useBottomScroll = () => {
  const [bottom, setBottom] = useState(false)
  const handleScroll = () => {
    const btm =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight
    if (btm) {
      setBottom(btm)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return bottom
}
