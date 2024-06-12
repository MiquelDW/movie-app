// indicate that this file or module should be treated as a Client Component
"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
// you can access and change the current theme within any component using the 'useTheme' hook provided by 'next-themes', updating the theme causes re-renders like 'useState'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  // access and change current theme with the 'useTheme' hook
  // systemTheme = the theme that matches the system preference ('light' or 'dark')
  const { theme, setTheme, systemTheme } = useTheme();
  //
  const [mounted, setMounted] = useState(false);

  // if current theme's value === "system", use the 'systemTheme' value, if otherwise just use the current theme's value instead
  const currentTheme = theme === "system" ? systemTheme : theme;
  //
  useEffect(() => {
    //
    setMounted(true);
  }, []);
  return (
    <div>
      {/*  */}
      {mounted &&
        // conditionally render a theme-switch button based on the current value of the state variable 'theme'
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-xl hover:text-amber-500"
          />
        ))}
    </div>
  );
}
