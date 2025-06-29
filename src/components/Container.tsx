import { ComponentPropsWithRef } from "react";

type ContainerProps = Pick<ComponentPropsWithRef<"section">, "className" | "children">;

export default function Container({ children, ...props }: ContainerProps) {
  return <section className={`container mx-auto ${props.className || null} `}>{children}</section>;
}
