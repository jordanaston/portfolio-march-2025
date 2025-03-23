import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrolled / 200);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-200"
      style={{ opacity }}
    >
      <FaArrowDown className="animate-bounce text-2xl" />
    </div>
  );
}
