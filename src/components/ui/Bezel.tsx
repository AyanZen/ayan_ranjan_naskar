import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type BezelProps<T extends ElementType = "div"> = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Bezel<T extends ElementType = "div">({
  children,
  className = "",
  innerClassName = "",
  as,
  ...rest
}: BezelProps<T>) {
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag className={`bezel-outer ${className}`} {...rest}>
      <div className={`bezel-inner ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
