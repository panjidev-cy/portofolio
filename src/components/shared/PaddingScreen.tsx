import React from "react";
type PaddingProps = {
  children: React.ReactNode;
};

function PaddingScreen({ children }: PaddingProps) {
  return <div className="px-[10%]">{children}</div>;
}

export default PaddingScreen;
