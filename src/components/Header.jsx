import { memo } from "react";

const Header = memo(({text="Header"}) => {
  return (
    <h1 className="text-4xl font-bold">{text}</h1>
  );
});

export default Header;
