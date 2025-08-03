import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./ThemeProvider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-10 w-20 px-2 relative overflow-hidden border-2 hover:scale-105 transition-all duration-300 bg-background/80 backdrop-blur-sm"
    >
      {/* Background slider */}
      <div className={`absolute inset-0.5 rounded-sm transition-all duration-300 ${theme === 'dark'
        ? 'bg-slate-800'
        : 'bg-primary/10 border border-primary/20'
        }`} />

      {/* Single Icon - only show current theme icon */}
      <div className="relative z-10 flex items-center justify-center w-full">
        {theme === 'light' ? (
          <Sun className="h-4 w-4 text-primary transition-all duration-300" />
        ) : (
          <Moon className="h-4 w-4 text-yellow-400 transition-all duration-300" />
        )}
      </div>

      <span className="sr-only">Toggle between light and dark mode</span>
    </Button>
  )
}