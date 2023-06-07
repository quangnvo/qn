"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "./ui/icons-sun-moon"


export function ModeToggle() {
  const { setTheme } = useTheme()

  let theme = localStorage.getItem("theme")

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
