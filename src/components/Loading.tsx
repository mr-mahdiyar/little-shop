import { type ComponentPropsWithRef } from "react";

type LoadingProps = Pick<ComponentPropsWithRef<"section">, "className">;

export default function Loading({ ...props }: LoadingProps) {
  return <section className={`loading ${props.className || null}`} />;
}
