// indicate that this file or module should be treated as a Client Component
// in Next.js, you should use client components for interactivity and dynamic content on a website because they enable browser-side rendering and event handling, providing a responsive and interactive user experience
"use client";

// the ThemeProvider uses React Context to make the current theme available to all components through the 'useTheme' hook. It provides theme-related state (theme, setTheme, etc.) to the rest of your application which you can use
import { ThemeProvider } from "next-themes";

// theme provider component that wraps around the entire website
export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    // default theme of the provider component will be based on theme preference on the user's system
    // with attribute="class", Themes are applied via CSS classes
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200">
        {children}
      </div>
    </ThemeProvider>
  );
}
