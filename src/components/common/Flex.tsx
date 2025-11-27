import type React from "react";

function Flex({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export default Flex;
