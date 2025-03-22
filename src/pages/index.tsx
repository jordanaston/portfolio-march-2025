import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme, Theme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Click me</Button>
      <Switch
        checked={theme === Theme.LIGHT}
        className="cursor-pointer"
        onCheckedChange={() =>
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
        }
      />
    </div>
  );
}
