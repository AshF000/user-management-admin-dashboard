import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ToggleDark = () => {
  const [checked, setChecked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [checked]);

  const onCheckedChange = (e) => {
    setChecked(e);
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Switch
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={cn(checked ? "" : "bg-black!")}
        />
        {checked ? (
          <Sun className="fill-orange-400 text-orange-200" />
        ) : (
          <Moon className="fill-black" />
        )}
      </div>
    </>
  );
};

export default ToggleDark;
