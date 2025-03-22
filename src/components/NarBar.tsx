import { useTheme, Theme } from "@/context/ThemeContext";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

export default function NarBar() {
  const { theme, setTheme } = useTheme();

  const tabs = [{ label: "HOME" }, { label: "WORK" }, { label: "INFO" }];

  return (
    <nav className="fixed top-0 right-0 left-0 flex items-center justify-between px-4 py-[clamp(0.75rem,1vw+0.5rem,1.25rem)] sm:px-[clamp(0.75rem,5vw+0.5rem,8rem)]">
      <div className="flex items-center gap-[clamp(0.5rem,0.5vw+0.25rem,0.75rem)]">
        <div className="cursor-pointer text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] leading-[0.85] font-semibold">
          <p>JORDAN</p>
          <p>ASTON.IO</p>
        </div>
        <Switch
          checked={theme === Theme.LIGHT}
          className="scale-[clamp(0.8,0.9vw+0.7,0.9)] cursor-pointer"
          onCheckedChange={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
        />
      </div>
      <div className="sm:gap-[clamp(0rem,max(0.5vw - 0.5rem,0),0.75rem)] flex items-center">
        {tabs.map((tab) => (
          <Button
            key={tab.label}
            variant="ghost"
            className="rounded-none py-[clamp(0.5rem,0.75vw+0.25rem,0.75rem)] text-[clamp(0.875rem,1vw+0.5rem,1rem)] sm:px-[clamp(0.75rem,1vw+0.5rem,1.25rem)]"
          >
            {tab.label}
          </Button>
        ))}
        <Button className="hidden px-[clamp(1.5rem,2vw+1rem,2rem)] py-[clamp(1rem,1.5vw+0.5rem,1.5rem)] text-[clamp(0.875rem,1vw+0.5rem,1rem)] sm:inline-flex">
          <p>GET IN TOUCH</p>
        </Button>
      </div>
    </nav>
  );
}
