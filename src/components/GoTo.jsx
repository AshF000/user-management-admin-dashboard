import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const GoTo = ({ handleGoto }) => {
  const gotoRef = useRef(null);
  const [value, setValue] = useState("");

  const handleBtn = () => {
    if (!value) return;
    handleGoto(value);
    setValue("");
  };

  return (
    <>
      <label htmlFor="goto">
        Go To:{" "}
        <Input
          ref={gotoRef}
          id="goto"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type={"number"}
          placeholder={"Page#"}
          className={cn("w-22")}
        />
      </label>
      <Button onClick={handleBtn}>Go</Button>
    </>
  );
};

export default GoTo;
