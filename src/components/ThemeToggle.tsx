
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  variant?: 'default' | 'icon';
  className?: string;
}

const ThemeToggle = ({ variant = 'default', className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  if (variant === 'icon') {
    return (
      <Toggle 
        pressed={isDark}
        onPressedChange={toggleTheme}
        aria-label="Toggle theme"
        className={className}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 45 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {isDark ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </motion.div>
      </Toggle>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={className}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 45 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
