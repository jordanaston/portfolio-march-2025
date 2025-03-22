import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme, Theme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>Click me</Button>
      <Switch
        checked={theme === Theme.LIGHT}
        className="cursor-pointer"
        onCheckedChange={() =>
          setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
        }
      />
      <h1 className="text-4xl">Hello World</h1>
    </div>
  );
}
