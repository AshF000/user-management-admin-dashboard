import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

const UserSearch = ({ className, onChange, value, setValue, type }) => {
  const handleClear = () => {
    setValue("");
  };
  return (
    <div className="relative w-xs">
      <Input
        type={type}
        className={`searchInp dark:text-red-300 ${className || ""}`}
        placeholder="Search User"
        onChange={onChange}
        value={value}
      />
      {value && (
        <X
          className="absolute top-1/2 right-2 -translate-y-1/2"
          size={16}
          strokeWidth="2"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default UserSearch;
