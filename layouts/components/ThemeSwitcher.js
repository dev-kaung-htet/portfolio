import config from "@config/config.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme_switcher } = config.settings;
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  return (
    <>
      {theme_switcher && (
        <button
          aria-label="Toggle Theme"
          type="button"
          className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
        ></button>
      )}
    </>
  );
};

export default ThemeSwitcher;
