"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "./ui/icons-sun-moon"
import { useEffect, useState } from "react"


export function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // return null
    return (
      <button className="border rounded-md w-10 h-10 flex items-center justify-center bg-white dark:bg-dark dark:text-white">
        ...
      </button>
    )
  }

  return (
    <button onClick={() => {
      if (theme == "" || theme == "light") {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }}>
      {theme !== "dark" ? (
        <SunIcon className="" />
      ) : (
        <MoonIcon className="" />
      )}
    </button>
  )
}
