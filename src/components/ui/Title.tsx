import type { ElementType, ReactNode } from "react";
import { cn } from "../../utils/utils";

interface PropsType {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
}

const Title = ({ children, className, tag: Tag = "h2" }: PropsType) => {
  return (
    <Tag
      className={cn(
        "text-xl font-bold leading-[140%] text-[#222E48]",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Title;
