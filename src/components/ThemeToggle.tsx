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
      <div className={`absolute inset-0.5 rounded-sm transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-slate-800 translate-x-0' 
          : 'bg-yellow-400 translate-x-0'
      }`} />
      
      {/* Icons */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <Sun className={`h-4 w-4 transition-all duration-300 ${
          theme === 'light' 
            ? 'text-slate-800 scale-110' 
            : 'text-slate-400 scale-90'
        }`} />
        <Moon className={`h-4 w-4 transition-all duration-300 ${
          theme === 'dark' 
            ? 'text-yellow-400 scale-110' 
            : 'text-slate-400 scale-90'
        }`} />
      </div>
      
      {/* Text indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xs font-medium transition-all duration-300 ${
          theme === 'light' 
            ? 'text-slate-800' 
            : 'text-yellow-400'
        }`}>
          {theme === 'light' ? 'LIGHT' : 'DARK'}
        </span>
      </div>
      
      <span className="sr-only">Toggle between light and dark mode</span>
    </Button>
  )
}