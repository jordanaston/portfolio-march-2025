import { useTheme, Theme } from "@/context/ThemeContext";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useScrollBackground } from "@/hooks/useScrollBackground";
import Link from "next/link";

export default function NarBar() {
  const { theme, setTheme } = useTheme();
  const backgroundColor = useScrollBackground();

  const tabs = [
    { label: "HOME", href: "#home" },
    { label: "WORK", href: "#work" },
    { label: "INFO", href: "#info" },
  ];

  return (
    <motion.nav
      className="fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-4 py-[clamp(0.75rem,1vw+0.5rem,1.25rem)] backdrop-blur-sm sm:px-[clamp(0.75rem,5vw+0.5rem,8rem)]"
      style={{ backgroundColor }}
    >
      <div className="flex items-center gap-[clamp(0.5rem,0.5vw+0.25rem,0.75rem)]">
        <Link href="#home" scroll={false}>
          <div className="cursor-pointer text-[clamp(1rem,1.2vw+0.5rem,1.25rem)] leading-[0.85] font-semibold">
            <p>JORDAN</p>
            <p>ASTON.IO</p>
          </div>
        </Link>
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
          <Link key={tab.label} href={tab.href} scroll={false}>
            <Button
              variant="ghost"
              className="rounded-none py-[clamp(0.5rem,0.75vw+0.25rem,0.75rem)] text-[clamp(0.875rem,1vw+0.5rem,1rem)] sm:px-[clamp(0.75rem,1vw+0.5rem,1.25rem)]"
            >
              {tab.label}
            </Button>
          </Link>
        ))}
        <Link href="#contact" scroll={false}>
          <Button className="hidden px-[clamp(1.5rem,2vw+1rem,2rem)] py-[clamp(1rem,1.5vw+0.5rem,1.5rem)] text-[clamp(0.875rem,1vw+0.5rem,1rem)] sm:inline-flex">
            <p>GET IN TOUCH</p>
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
