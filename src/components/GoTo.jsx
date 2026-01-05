import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const GoTo = ({ value, setValue, onSearch }) => {
  const handleChange = (e) => {
    setValue((p) => (p === value ? e.target.value : p));
  };

  return (
    <>
      <label htmlFor="goto">
        Go To:{" "}
        <Input
          id="goto"
          type={"number"}
          placeholder={"Page#"}
          onChange={handleChange}
          className={cn("w-22")}
        />
      </label>
      <Button onClick={onSearch}>Go</Button>
    </>
  );
};

export default GoTo;
