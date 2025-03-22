import { useTheme, Theme } from "@/context/ThemeContext";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

export default function NarBar() {
  const { theme, setTheme } = useTheme();

  const tabs = [{ label: "HOME" }, { label: "WORK" }, { label: "INFO" }];

  return (
    <nav className="fixed left-0 right-0 top-0 flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="cursor-pointer text-xl font-semibold leading-[0.85]">
          <p>JORDAN</p>
          <p>ASTON.IO</p>
        </div>
        <Switch
          checked={theme === Theme.LIGHT}
          className="cursor-pointer"
          onCheckedChange={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
        />
      </div>
      <div className="flex items-center">
        {tabs.map((tab) => (
          <Button
            key={tab.label}
            variant="ghost"
            className="cursor-pointer rounded-none"
          >
            {tab.label}
          </Button>
        ))}
        <Button className="cursor-pointer px-8 py-6">
          <p>GET IN TOUCH</p>
        </Button>
      </div>
    </nav>
  );
}
