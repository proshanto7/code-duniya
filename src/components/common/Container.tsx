import type React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1180px] px-2.5 lg:px-0 mx-auto ">{children}</div>;
}

export default Container;
