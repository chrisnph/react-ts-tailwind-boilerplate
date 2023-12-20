import { ReactNode, useEffect, useState } from "react";

const Card = ({
  children,
  bgColor,
  largeShadow,
  heightAuto,
  padding,
}: {
  bgColor?: string;
  largeShadow?: boolean;
  heightAuto?: boolean;
  padding?: string;
  children: ReactNode;
}) => {
  const [optionProps] = useState(() => {
    return {
      bgColor: bgColor || "bg-white",
      largeShadow: largeShadow ? "shadow-lg" : "shadow-md",
      heightAuto: heightAuto ? "h-fit" : "min-h-[158px]",
      padding: padding || "p-[24px]",
    };
  });

  const [cardOptions, setCardOptions] = useState<string | undefined>();

  useEffect(() => {
    setCardOptions(Object.values(optionProps).join(" "));
  }, [optionProps]);

  return (
    <div className={`container-card rounded-2xl w-full h-full ${cardOptions}`}>
      {children}
    </div>
  );
};

export default Card;
