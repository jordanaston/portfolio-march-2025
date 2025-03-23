import { useScroll, useTransform } from "motion/react";

export const useScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  return useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5],
    [
      "transparent",
      "color-mix(in srgb, var(--accent) 5%, transparent)",
      "color-mix(in srgb, var(--accent) 10%, transparent)",
      "color-mix(in srgb, var(--accent) 20%, transparent)",
      "color-mix(in srgb, var(--accent) 30%, transparent)",
      "color-mix(in srgb, var(--accent) 40%, transparent)",
      "color-mix(in srgb, var(--accent) 50%, transparent)",
      "color-mix(in srgb, var(--accent) 60%, transparent)",
      "color-mix(in srgb, var(--accent) 70%, transparent)",
      "color-mix(in srgb, var(--accent) 75%, transparent)",
      "color-mix(in srgb, var(--accent) 80%, transparent)",
    ]
  );
};
